(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{513:function(e,s,a){"use strict";a.r(s);var r=a(10),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"xxl-job的docker部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xxl-job的docker部署"}},[e._v("#")]),e._v(" xxl-job的Docker部署")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("docker上面部署的什么版本的镜像，你的项目导包时最好使用相同版本，以避免出现乱七八糟的问题。"),a("br"),e._v("\n===============时刻积累==============="),a("br"),e._v(" "),a("code",[e._v("systemctl start firewalld")]),e._v("   # 开启防火墙"),a("br"),e._v(" "),a("code",[e._v("firewall-cmd --zone=public --add-port=8080/tcp --permanent")]),e._v("   # 放行指定单个端口"),a("br"),e._v(" "),a("code",[e._v("firewall-cmd --zone=public --add-port=3306/tcp --add-port=6379/tcp --permanent")]),e._v("    # 添加放行指定单个端口"),a("br"),e._v(" "),a("code",[e._v("firewall-cmd --reload")]),e._v("       # 生效添加的要放行的端口"),a("br"),e._v(" "),a("code",[e._v("firewall-cmd --list-ports")]),e._v("   # 查看所有被放行的端口"),a("br"),e._v(" "),a("code",[e._v("firewall-cmd --zone=public --remove-port=8081/tcp --permanent")]),e._v("   # 取消指定一开放端口")])]),e._v(" "),a("h4",{attrs:{id:"拉取镜像并且运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像并且运行"}},[e._v("#")]),e._v(" 拉取镜像并且运行")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("以2.2.0为例,注意你数据库的执行脚本也应该去2.2.0版本的代码里去找！!")])]),e._v(" "),a("ul",[a("li",[e._v("镜像拉取")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker pull xuxueli/xxl-job-admin:2.2.0\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("执行时的参数参数说明")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('docker run -d -p 8481:8777 -v /home/zzp/dockerlogshere:/data/applogs --name xxl-job-kusch001 -e PARAMS="--spring.datasource.url=你的数据库URL --spring.datasource.username=你的数据库用户名 --spring.datasource.password=你的数据库密码 --spring.datasource.driver-class-name=你的数据库驱动 --spring.mail.host=smtp.qq.com --spring.mail.username=你的QQ邮箱 --spring.mail.from=你的QQ邮箱 --spring.mail.password=你的QQ邮箱授权码 --server.port=8777"  xuxueli/xxl-job-admin:2.2.0\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("docker run 的常见参数说明：")]),e._v(" "),a("p",[e._v("-d  ====》后台运行容器")]),e._v(" "),a("p",[e._v("-v 本地目录:容器目录  ====》将本机的目录挂载到容器目录中")]),e._v(" "),a("p",[e._v("--name ====》为容器取个名字")]),e._v(" "),a("p",[e._v("-p 主机端口：容器端口 ====》端口映射")]),e._v(" "),a("p",[e._v("-e 键=值 ====》设施环境变量")])]),e._v(" "),a("h4",{attrs:{id:"一些命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一些命令"}},[e._v("#")]),e._v(" 一些命令")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("docker ps -a")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("docker info")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("docker rm 容器id")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("docker rmi 镜像id")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("docker stop 容器id")])])])])])}),[],!1,null,null,null);s.default=t.exports}}]);