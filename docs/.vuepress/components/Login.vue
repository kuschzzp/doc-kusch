<template>
  <div class="private-login">
    <section class="private-login-card" aria-labelledby="private-login-title">
      <div class="private-login-mark" aria-hidden="true">锁</div>
      <p class="private-login-eyebrow">PRIVATE CONTENT</p>
      <h2 id="private-login-title">{{ pageTitle }}</h2>
      <p class="private-login-description">{{ pageDescription }}</p>

      <div class="private-login-target" v-if="targetTitle">
        <span>正在访问</span>
        <strong>{{ targetTitle }}</strong>
      </div>

      <form class="private-login-form" @submit.prevent="login" novalidate>
        <div class="private-login-field">
          <label for="private-username">用户名</label>
          <input
            id="private-username"
            v-model.trim="username"
            type="text"
            name="username"
            autocomplete="username"
            placeholder="请输入访问用户名"
            :aria-invalid="errorMessage ? 'true' : 'false'"
          />
        </div>

        <div class="private-login-field">
          <div class="private-login-label-row">
            <label for="private-password">密码</label>
            <button
              class="private-login-toggle"
              type="button"
              :aria-pressed="showPassword ? 'true' : 'false'"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '隐藏密码' : '显示密码' }}
            </button>
          </div>
          <input
            id="private-password"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            autocomplete="current-password"
            placeholder="请输入访问密码"
            :aria-invalid="errorMessage ? 'true' : 'false'"
          />
        </div>

        <p class="private-login-error" v-if="errorMessage" role="alert">
          {{ errorMessage }}
        </p>

        <button class="private-login-submit" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? '正在验证…' : '进入文章' }}
        </button>
      </form>

      <p class="private-login-hint">验证成功后将自动返回原文章，登录状态保存在本设备。</p>

      <div class="private-login-actions">
        <button type="button" @click="goBack">返回上一页</button>
        <router-link to="/">回到首页</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      isSubmitting: false,
      showPassword: false,
      privateInfo: {
        username: "",
        password: "",
        loginKey: "",
        expire: "",
        loginInfo: "",
        allLoginKey: "kbt",
      },
    };
  },
  computed: {
    verifyMode() {
      return this.$route.query.verifyMode || "single";
    },
    targetTitle() {
      const targetPath = this.$route.query.toPath;
      const target = (this.$filterPosts || []).find((item) => item.path === targetPath);
      return target ? target.title : "";
    },
    pageTitle() {
      return this.verifyMode === "first" ? "欢迎访问" : "内容需要验证";
    },
    pageDescription() {
      if (this.verifyMode === "first") {
        return "完成验证后即可继续浏览站点内容。";
      }
      if (this.verifyMode === "all") {
        return "本站部分内容需要登录后才能阅读。";
      }
      return "这篇文章是私密内容，请验证身份后继续阅读。";
    }
  },
  methods: {
    /**
     * 登录验证
     */
    login() {
      if (this.isSubmitting) return;

      this.errorMessage = "";
      if (!this.username && !this.password) {
        this.showError("请输入用户名和密码");
        return;
      }
      if (!this.username) {
        this.showError("请输入用户名");
        return;
      }
      if (!this.password) {
        this.showError("请输入密码");
        return;
      }

      this.isSubmitting = true;
      let { privateInfo } = this;
      // 获取全局配置
      let { username, password, loginKey, expire, firstLoginKey, loginInfo } =
          this.$themeConfig.privatePage;
      !loginKey && (loginKey = "vdoing_manager"); // 默认为 vdoing_manager
      // 计算正确的过期时间
      expire = this.getExpire(expire);
      !expire && (expire = 86400000);
      if (this.username && this.password) {
        // 进入网站前进行验证
        if (this.$route.query.verifyMode == "first") {
          privateInfo.expire = expire;
          !firstLoginKey && (firstLoginKey = "vdoing_first_login"); // 默认为 vdoing_first_login
          // 检查 loginInfo 是否验证成功
          let check = false;
          if (loginInfo && loginInfo.hasOwnProperty(firstLoginKey)) {
            check = this.checkLoginInfoAndJump(
                loginInfo[firstLoginKey],
                firstLoginKey
            );
          }
          // 如果第一次进入网站以管理员登录，则网站的所有私密文章不再需要验证
          if (
              !check &&
              this.username == username &&
              this.password == password
          ) {
            // 如果管理员登录，直接 key = vdoing_manager，不需要再次 key = vdoing_first_login
            // this.storageLocalAndJump(firstLoginKey, false);
            this.storageLocalAndJump(loginKey, true);
          } else if (!check) {
            this.password = ""; // 清空密码
            this.showError("用户名或密码错误，请联系博主获取访问信息");
          }
        } else {
          // 如果是单个文章验证
          if (this.$route.query.verifyMode == "single") {
            try {
              this.$filterPosts.forEach((item) => {
                if (item.path == this.$route.query.toPath) {
                  privateInfo.username = item.frontmatter.username;
                  privateInfo.password = item.frontmatter.password;
                  privateInfo.loginKey = item.frontmatter.permalink;
                  privateInfo.expire =
                      this.getExpire(item.frontmatter.expire) || expire;
                  privateInfo.loginInfo = item.frontmatter.loginInfo;
                  // 利用异常机制跳出 forEach 循环，break、return、continue 不会起作用
                  throw new Error();
                }
              });
            } catch (e) {}
          }
          // checkLoginInfo：判断是否进行了 loginInfo 验证
          let checkLoginInfo = false;
          // 如果没有配置单私密文章用户信息，则使用全局配置
          if (
              !privateInfo.username &&
              !privateInfo.password &&
              !privateInfo.loginInfo
          ) {
            privateInfo.loginKey = this.$route.query.toPath;
            privateInfo.loginInfo = loginInfo;
            privateInfo.expire ? "" : (privateInfo.expire = expire);
          }
          // 先进行 loginInfo 验证
          if (privateInfo.loginInfo) {
            // 如果是数组：即单个文章设置的 loginInfo
            if (Array.isArray(privateInfo.loginInfo)) {
              checkLoginInfo = this.checkLoginInfoAndJump(
                  privateInfo.loginInfo
              );
            } else if (
                privateInfo.loginInfo.hasOwnProperty(this.$route.query.toPath)
            ) {
              // 如果是对象，即全局设置的 loginInfo
              checkLoginInfo = this.checkLoginInfoAndJump(
                  privateInfo.loginInfo[this.$route.query.toPath]
              );
            }
          }
          // 如果没有触发 loginInfo 验证或者 loginInfo 验证失败，则进行单个用户名密码验证
          if (!checkLoginInfo) {
            // 如果使用文章配置的用户名密码
            if (
                this.username == privateInfo.username &&
                this.password == privateInfo.password
            ) {
              this.storageLocalAndJump(this.privateInfo.loginKey, true);
            } else if (
                // 如果使用全局配置的用户名密码
                this.username == username &&
                this.password == password
            ) {
              this.storageLocalAndJump(loginKey, true);
            } else {
              this.password = ""; // 清空密码
              this.showError("用户名或密码错误，请联系博主获取访问信息");
            }
          }
        }
      } else if (this.username == "" && this.password != "") {
        this.showError("请输入用户名");
      } else if (this.username != "" && this.password == "") {
        this.showError("请输入密码");
      } else {
        this.showError("请输入用户名和密码");
      }
    },
    showError(message) {
      this.errorMessage = message;
      this.isSubmitting = false;
    },
    goBack() {
      if (typeof window !== "undefined" && window.history.length > 1) {
        this.$router.go(-1);
      } else {
        this.$router.push({ path: "/" });
      }
    },
    /**
     * 检查 loginInfo 里的用户名和密码
     * 匹配成功返回 true，失败返回 false
     */
    checkLoginInfoAndJump(
        loginInfo = this.privateInfo.loginInfo,
        loginKey = this.privateInfo.loginKey
    ) {
      try {
        loginInfo.forEach((item) => {
          if (
              this.username == item.username &&
              this.password == item.password
          ) {
            this.storageLocalAndJump(loginKey, true);
            // 利用异常机制跳出 forEach 循环，break、return、continue 不会起作用
            throw new Error();
          }
        });
      } catch (error) {
        return true;
      }
      return false;
    },
    /**
     * 添加登录信息到本地存储区，并跳转到私密文章
     * loginKey：存储到本地的 key，方便自动验证
     * jump：是否跳转到私密文章，默认存储到本地后跳转
     */
    storageLocalAndJump(loginKey = this.privateInfo.loginKey, jump = true) {
      const data = JSON.stringify({
        username: this.username,
        password: this.password,
        time: new Date().getTime(),
        expire: this.privateInfo.expire,
      });
      window.localStorage.setItem(loginKey, data);
      if (jump) {
        addTip("登录成功，正在跳转 ...", "success");
        if (this.$route.query.toPath) {
          this.$router.push({
            path: this.$route.query.toPath,
          });
        } else {
          this.$router.push({
            path: "/",
          });
        }
      }
    },
    /**
     * 计算过期时间
     */
    getExpire(expire) {
      if (expire) {
        if (expire.indexOf("d") !== -1) {
          expire = parseInt(expire.replace("d", "")) * 24 * 60 * 60 * 1000; // 天
        } else if (expire.indexOf("h") !== -1) {
          expire = parseInt(expire.replace("h", "")) * 60 * 60 * 1000; // 小时
        } else {
          expire = parseInt(expire) * 1000; // 不加单位为秒
        }
      }
      return expire;
    },
  },
};
/**
 * 添加消息提示
 * content：内容
 * type：弹窗类型（tip、success、warning、danger）
 * startHeight：第一个弹窗的高度，默认 50
 * dieTime：弹窗消失时间（毫秒），默认 3000 毫秒
 */
function addTip(content, type, startHeight = 50, dieTime = 3000) {
  var tip = document.querySelectorAll(".global-tip");
  var time = new Date().getTime();
  // 获取最后消息提示元素的高度
  var top = tip.length == 0 ? 0 : tip[tip.length - 1].getAttribute("data-top");
  // 如果产生两个以上的消息提示，则出现在上一个提示的下面，即高度添加，否则默认 50
  var lastTop =
      parseInt(top) +
      (tip.length != 0 ? tip[tip.length - 1].offsetHeight + 17 : startHeight);

  let div = document.createElement("div");
  div.className = `global-tip tip-${type} ${time}`;
  div.style.top = parseInt(top) + "px";
  div.setAttribute("data-top", lastTop);
  if (type == "info" || type == 1) {
    div.innerHTML = `<i class="iconfont icon-info icon"></i><p class="tip-info-content">${content}</p>`;
  } else if (type == "success" || type == 2) {
    div.innerHTML = `<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">${content}</p>`;
  } else if (type == "danger" || type == 3) {
    div.innerHTML = `<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">${content}</p>`;
  } else if (type == "warning" || type == 4) {
    div.innerHTML = `<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">${content}</p>`;
  }
  document.body.appendChild(div);

  let timeTip = document.getElementsByClassName(time)[0];
  setTimeout(() => {
    timeTip.style.top = parseInt(lastTop) + "px";
    timeTip.style.opacity = "1";
  }, 10);

  // 消息提示 dieTime 秒后隐藏并被删除
  setTimeout(() => {
    timeTip.style.top = "0px";
    timeTip.style.opacity = "0";

    // 下面的所有元素回到各自曾经的出发点
    var allTipElement = nextAllTipElement(timeTip);
    for (let i = 0; i < allTipElement.length; i++) {
      var next = allTipElement[i];
      var top =
          parseInt(next.getAttribute("data-top")) - next.offsetHeight - 17;
      next.setAttribute("data-top", top);
      next.style.top = top + "px";
    }
    setTimeout(() => {
      timeTip.remove();
    }, 500);
  }, dieTime);
}
/**
 * 获取后面的兄弟元素
 */
function nextAllTipElement(elem) {
  var r = [];
  var n = elem;
  for (; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n !== elem) {
      r.push(n);
    }
  }
  return r;
}
</script>

<style>
.private-login-page .content-wrapper > h1 {
  display: none;
}

.private-login {
  max-width: 34rem;
  margin: 0 auto 2rem;
  padding: 0.5rem;
  box-sizing: border-box;
}

.private-login .private-login-card {
  padding: clamp(1.5rem, 5vw, 2.5rem);
  border: 1px solid var(--borderColor, rgba(0, 0, 0, 0.15));
  border-radius: 10px;
  background: var(--mainBg, #fff);
  box-shadow: 0 12px 35px rgba(0, 50, 60, 0.08);
}

.private-login .private-login-mark {
  width: 3.25rem;
  height: 3.25rem;
  margin: 0 auto 1rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(17, 168, 205, 0.12);
  color: #11a8cd;
  font-size: 1.15rem;
  font-weight: 700;
}

.private-login .private-login-eyebrow {
  margin: 0;
  color: #11a8cd;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1.4;
  text-align: center;
}

.private-login h2 {
  margin: 0.45rem 0 0;
  color: var(--textColor, #00323c);
  font-size: 1.6rem;
  line-height: 1.35;
  text-align: center;
}

.private-login .private-login-description {
  max-width: 25rem;
  margin: 0.75rem auto 0;
  color: var(--textColor, #00323c);
  font-size: 0.92rem;
  line-height: 1.7;
  opacity: 0.68;
  text-align: center;
}

.private-login .private-login-target {
  margin: 1.35rem 0 0;
  padding: 0.8rem 0.9rem;
  border-left: 3px solid #11a8cd;
  background: rgba(17, 168, 205, 0.07);
  color: var(--textColor, #00323c);
  font-size: 0.82rem;
  line-height: 1.5;
}

.private-login .private-login-target span {
  display: block;
  margin-bottom: 0.18rem;
  font-size: 0.72rem;
  opacity: 0.58;
}

.private-login .private-login-target strong {
  display: block;
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.private-login .private-login-form {
  margin-top: 1.35rem;
}

.private-login .private-login-field {
  margin-top: 1rem;
}

.private-login .private-login-field:first-child {
  margin-top: 0;
}

.private-login .private-login-field label {
  display: block;
  margin-bottom: 0.45rem;
  color: var(--textColor, #00323c);
  font-size: 0.83rem;
  font-weight: 600;
}

.private-login .private-login-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.private-login .private-login-label-row label {
  margin-bottom: 0;
}

.private-login input {
  width: 100%;
  min-height: 2.75rem;
  padding: 0.68rem 0.8rem;
  box-sizing: border-box;
  border: 1px solid var(--borderColor, rgba(0, 0, 0, 0.15));
  border-radius: 5px;
  outline: none;
  background: var(--mainBg, #fff);
  color: var(--textColor, #00323c);
  font-family: inherit;
  font-size: 0.92rem;
  line-height: 1.4;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.private-login input::placeholder {
  color: var(--textColor, #00323c);
  opacity: 0.4;
}

.private-login input:focus {
  border-color: #11a8cd;
  box-shadow: 0 0 0 3px rgba(17, 168, 205, 0.14);
}

.private-login .private-login-toggle {
  padding: 0;
  border: 0;
  background: transparent;
  color: #11a8cd;
  font-family: inherit;
  font-size: 0.76rem;
  cursor: pointer;
}

.private-login .private-login-toggle:hover,
.private-login .private-login-actions button:hover,
.private-login .private-login-actions a:hover {
  color: #0d8cae;
}

.private-login .private-login-toggle:focus-visible,
.private-login .private-login-actions button:focus-visible,
.private-login .private-login-actions a:focus-visible {
  outline: 2px solid #11a8cd;
  outline-offset: 3px;
}

.private-login .private-login-error {
  margin: 0.8rem 0 0;
  color: #ff5722;
  font-size: 0.82rem;
  line-height: 1.5;
}

.private-login .private-login-submit {
  width: 100%;
  min-height: 2.8rem;
  margin-top: 1.2rem;
  padding: 0.65rem 1rem;
  border: 0;
  border-radius: 5px;
  background: #11a8cd;
  color: #fff;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.2s ease;
}

.private-login .private-login-submit:hover:not(:disabled) {
  background: #0d95b6;
}

.private-login .private-login-submit:active:not(:disabled) {
  transform: translateY(1px);
}

.private-login .private-login-submit:focus-visible {
  outline: 2px solid #11a8cd;
  outline-offset: 3px;
}

.private-login .private-login-submit:disabled {
  cursor: wait;
  opacity: 0.62;
}

.private-login .private-login-hint {
  margin: 1rem 0 0;
  color: var(--textColor, #00323c);
  font-size: 0.76rem;
  line-height: 1.55;
  opacity: 0.55;
  text-align: center;
}

.private-login .private-login-actions {
  margin-top: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 0.8rem;
}

.private-login .private-login-actions button,
.private-login .private-login-actions a {
  padding: 0;
  border: 0;
  background: transparent;
  color: #11a8cd;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

@media (max-width: 719px) {
  .private-login {
    margin-bottom: 1rem;
    padding: 0;
  }

  .private-login .private-login-card {
    padding: 1.4rem 1.1rem 1.25rem;
    border-radius: 7px;
    box-shadow: 0 8px 24px rgba(0, 50, 60, 0.07);
  }

  .private-login h2 {
    font-size: 1.4rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .private-login input,
  .private-login .private-login-submit {
    transition: none;
  }
}

div.v-dialog-overlay {
  opacity: 1 !important;
}

.global-tip {
  position: fixed;
  display: flex;
  top: -10px;
  left: 50%;
  opacity: 0;
  min-width: 320px;
  transform: translateX(-50%);
  transition: opacity 0.3s linear, top 0.4s, transform 0.4s;
  z-index: 99999;
  padding: 15px 15px 15px 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  grid-row: 1;
  line-height: 17px;
}

.global-tip p {
  line-height: 17px;
  margin: 0;
  font-size: 14px;
}

.icon {
  margin-right: 10px;
  line-height: 17px;
}

.tip-success {
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}

.tip-success .tip-success-content {
  color: #67c23a;
}

.tip-danger {
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fde2e2;
}

.tip-danger .tip-danger-content {
  color: #f56c6c;
}

.tip-info {
  background-color: #edf2fc;
  border-color: #ebeef5;
}

.tip-info .tip-info-content {
  color: #909399;
}

.tip-warning {
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #faecd8;
}

.tip-warning .tip-warning-content {
  margin: 0;
  color: #e6a23c;
  line-height: 21px;
  font-size: 14px;
}
</style>
