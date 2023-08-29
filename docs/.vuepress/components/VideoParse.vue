<template>
  <div class="container">
    <iframe :src="finalUrl" id="player"
            width="100%" :style="{ height: containerHeight }" allowtransparency="true" allow="fullscreen"
            style="border: 0" scrolling="no">
      IE：看我做啥？我又不是不支持！
      <script src="https://2gether.video/release/extension.website.user.js"></script>
    </iframe>

    <el-form :model="formData" ref="vForm" :rules="rules" label-position="left" label-width="130px"
             size="medium" @submit.native.prevent>
      <div class="static-content-item">
        <el-divider direction="horizontal"></el-divider>
      </div>
      <el-form-item label="视频链接" prop="videoUrl" class="required">
        <el-input v-model="formData.videoUrl" type="text" clearable></el-input>
      </el-form-item>
      <el-form-item label="线路选择" prop="line" class="required">
        <el-select v-model="formData.line" clearable>
          <el-option v-for="(item, index) in lineOptions" :key="index" :label="item.label" :value="item.value"
                     :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="medium" :loading="loading" round @click="submitForm">解析</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  name: "VideoParse",
  data() {
    return {
      loading: false,
      containerHeight: '33vh',
      tip: "关于更多iframe属性见：https://developer.mozilla.org/zh-CN/docs/web/html/element/iframe",
      finalUrl: 'https://jx.xmflv.com/?url=',
      formData: {
        videoUrl: "",
        line: "https://jx.xmflv.com/?url=",
      },
      rules: {
        videoUrl: [{
          required: true,
          message: '请填写视频链接哈～～～',
        }, {
          pattern: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
          trigger: ['blur', 'change'],
          message: '请输入正确的网址'
        }],
        line: [{
          required: true,
          message: '请选择线路哈～～～',
        }],
      },
      lineOptions: [{
        "label": "线路一(暂时失效)",
        "value": "https://okjx.cc/?url=",
      }, {
        "label": "线路二",
        "value": 'https://jx.aidouer.net/?url='
      }, {
        "label": "线路三",
        "value": "https://jx.ppflv.com/?url="
      }, {
        "label": "线路四",
        "value": "https://www.8090.la/8090/?url="
      }, {
        "label": "线路五",
        "value": "https://jx.jsonplayer.com/player/?url="
      }, {
        "label": "线路六(推荐使用)",
        "value": "https://jx.xmflv.com/?url=",
      }, {
        "label": "线路七",
        "value": "https://vip.bljiex.com/so.php?wd=",
      },],
    }
  },
  methods: {
    submitForm() {
      this.$refs['vForm'].validate(valid => {
        console.log(111)
        if (valid) {
          //拼接表单参数给 finalUrl
          this.finalUrl = this.formData.line + this.formData.videoUrl
          this.loading = true
          let status = false;
          setTimeout(() => {
            this.loading = false
          }, 4000)
        }
      })
    },
    resetForm() {
      this.$refs['vForm'].resetFields()
    }
  }
}
</script>

<style scoped>

.el-form-item {
  margin-bottom: 22px;
  font-weight: bold;
}
</style>
