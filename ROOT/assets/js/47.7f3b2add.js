(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{508:function(s,a,t){"use strict";t.r(a);var e=t(10),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"docker安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker安装"}},[s._v("#")]),s._v(" Docker安装")]),s._v(" "),t("h2",{attrs:{id:"一-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-安装"}},[s._v("#")]),s._v(" 一: 安装")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("安装依赖包")])])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("在新主机首次安装 Docker Engine-Community之前，需要设置Docker仓库，之后，您可以从仓库安装和更新 Docker。"),t("br"),s._v("\n设置仓库，需要安装所需的软件包。yum-utils 提供了 yum-config-manager ，并且 device mapper 存储驱动程序需要   device-mapper-persistent-data 和 lvm2。")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y yum-utils device-mapper-persistent-data lvm2 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("设置阿里云镜像")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("安装Docker-CE")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[s._v("启动Docker-CE和设置自启动")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"二-设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-设置"}},[s._v("#")]),s._v(" 二: 设置")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("Docker镜像加速")])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("网易: "),t("code",[s._v("https://hub-mirror.c.163.com/")])])]),s._v(" "),t("li",[t("p",[s._v("阿里云: "),t("code",[s._v("https://<你的ID>.mirror.aliyuncs.com")])])]),s._v(" "),t("li",[t("p",[s._v("七牛云加速器: "),t("code",[s._v("https://reg-mirror.qiniu.com")])])]),s._v(" "),t("li",[t("p",[s._v("Docker中国区官方镜像: "),t("code",[s._v("https://registry.docker-cn.com")])])]),s._v(" "),t("li",[t("p",[s._v("中国科技大学: "),t("code",[s._v("https://docker.mirrors.ustc.edu.cn")])])])]),s._v(" "),t("p",[t("strong",[s._v("在 "),t("code",[s._v("/etc/docker/daemon.json")]),s._v(" 文件（没有就自己去创建一下这个文件！）内填写如下内容:")])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://ung2thfc.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("然后加载和重启Docker")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl daemon-reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("查看是否成功(Mirror)")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker info\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("如下:")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/docker1.png",alt:"图片1"}})]),s._v(" "),t("h2",{attrs:{id:"三-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-常用命令"}},[s._v("#")]),s._v(" 三: 常用命令")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("拉取镜像")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker pull "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("镜像名:tag"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如以下代码")]),s._v("\ndocker pull jenkins/jenkins:ls\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("删除容器")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名 or ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("查看容器日志")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker logs -f "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名 or ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[t("strong",[s._v("查看正在运行的容器")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为查看所有的容器，包括已经停止的。")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[t("strong",[s._v("删除所有容器")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a -q"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[t("strong",[s._v("停止、启动、杀死指定容器")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker start "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名 or ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器")]),s._v("\ndocker stop "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名 or ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动容器")]),s._v("\ndocker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("容器名 or ID"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 杀死容器")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[t("strong",[s._v("查看所有镜像")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker images\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"8"}},[t("li",[t("strong",[s._v("后台运行")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker run -d "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Other Parameters"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如")]),s._v("\ndocker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:33301:22 centos6-ssh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"9"}},[t("li",[t("strong",[s._v("暴露端口")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一共有三种形式进行端口映射")]),s._v("\ndocker -p ip:hostPort:containerPort "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射指定地址的主机端口到容器端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如：docker -p 127.0.0.1:3306:3306 映射本机3306端口到容器的3306端口")]),s._v("\ndocker -p ip::containerPort "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射指定地址的任意可用端口到容器端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如：docker -p 127.0.0.1::3306 映射本机的随机可用端口到容器3306端口")]),s._v("\ndocer -p hostPort:containerPort "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 映射本机的指定端口到容器的指定端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如：docker -p 3306:3306 # 映射本机的3306端口到容器的3306端口")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("ol",{attrs:{start:"10"}},[t("li",[t("strong",[s._v("映射文件夹")])])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("docker -v /home/data:/opt/data "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里/home/data 指的是宿主机的目录地址，后者则是容器的目录地址")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);