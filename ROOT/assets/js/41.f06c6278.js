(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{511:function(s,t,e){"use strict";e.r(t);var a=e(10),c=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos7-mini版设置网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos7-mini版设置网络"}},[s._v("#")]),s._v(" centOS7 mini版设置网络")]),s._v(" "),e("h2",{attrs:{id:"方式一-类似图形化修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式一-类似图形化修改"}},[s._v("#")]),s._v(" 方式一 类似图形化修改")]),s._v(" "),e("p",[s._v("首先用命令查看当前的网卡状态")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("nmcli d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork1.png",alt:"图片1"}})]),s._v(" "),e("p",[s._v("然后使用命令，并入下图所示方式修改")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("nmtui\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("点击查看操作图片")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork2.png",alt:"图片2"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork3.png",alt:"图片3"}})]),s._v(" "),e("p",[e("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork4.png",alt:"图片4"}})]),s._v(" "),e("ul",[e("li",[s._v("上一步操作完，使用"),e("code",[s._v("service network restart")]),s._v("重启一下网络即可使用"),e("code",[s._v("nmcli d")]),s._v("查看状态。")])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork5.png",alt:"图片5"}})])]),s._v(" "),e("h2",{attrs:{id:"方式二-修改配置文件方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方式二-修改配置文件方式"}},[s._v("#")]),s._v(" 方式二 修改配置文件方式")]),s._v(" "),e("ol",[e("li",[s._v("同上，查看状态。")]),s._v(" "),e("li",[s._v("使用命令"),e("code",[s._v("cd /etc/sysconfig/network-scripts")]),s._v("进入到指定文件夹。\n"),e("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork6.png",alt:"图片6"}})]),s._v(" "),e("li",[s._v("用"),e("code",[s._v("ls")]),s._v(" 查看存在的文件，使用"),e("code",[s._v("vi ifcfg-ens33")]),s._v("来修改文件（注意，不一定是叫这个名字，根据实际情况定！），进入后使用"),e("code",[s._v("i")]),s._v("开启编辑，修改完成后，按"),e("code",[s._v("ESC")]),s._v("，"),e("code",[s._v(":wq")]),s._v("退出，然后使用"),e("code",[s._v("service network restart")]),s._v("重启一下网络即可使用"),e("code",[s._v("nmcli d")]),s._v("查看状态。\n"),e("img",{attrs:{src:"https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork7.png",alt:"图片7"}})])])])}),[],!1,null,null,null);t.default=c.exports}}]);