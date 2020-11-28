(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{482:function(s,e,n){"use strict";n.r(e);var a=n(10),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"前端基础环境安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端基础环境安装"}},[s._v("#")]),s._v(" 前端基础环境安装")]),s._v(" "),n("h2",{attrs:{id:"nodejs的安装-windows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs的安装-windows"}},[s._v("#")]),s._v(" NodeJs的安装(windows)")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("首先是去官网下载nodejs，下载地址："),n("code",[s._v("https://nodejs.org/en/")]),s._v("。")])]),s._v(" "),n("li",[n("p",[s._v("一路都是 next（下一步）。")])]),s._v(" "),n("li",[n("p",[s._v("安装完成后"),n("code",[s._v("node -v")]),s._v("和"),n("code",[s._v("npm -v")]),s._v("查看版本，显示出版本就是正确安装了。")]),s._v(" "),n("blockquote",[n("p",[s._v("如果显示 "),n("code",[s._v("node")]),s._v(" 或者 "),n("code",[s._v("npm")]),s._v(" 不是命令，就是没配置好环境变量！\n在 "),n("code",[s._v("Path")]),s._v(" 那里添加值是你的node安装文件夹，以及下面要修改的 "),n("code",[s._v("node_global")]),s._v(" 文件夹。\n另外如果需要的话，我们还需要添加一个 "),n("code",[s._v("NODE_PATH")]),s._v(" 的环境变量，值是你安装目录下的 "),n("code",[s._v("node_modules")]),s._v(" 文件夹位置。")])])]),s._v(" "),n("li",[n("p",[s._v("为了我们宝贵的C盘空间，需要去修改全局模块路径和缓存路径。")])]),s._v(" "),n("li",[n("p",[s._v("这里将全局模块（node_global）和缓存（node_cache）放在了nodejs安装目录下. 在你的nodejs安装目录下创建这两个文件夹，名称分别为："),n("code",[s._v("node_global")]),s._v("和"),n("code",[s._v("node_cache")]),s._v("，另外还需要在"),n("code",[s._v("node_global")]),s._v("里面添加一个文件夹"),n("code",[s._v("node_modules")]),s._v("。")])]),s._v(" "),n("li",[n("p",[s._v("然后执行命令，修改默认文件夹为上面新建的两个文件夹。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" prefix "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"F:'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("ode"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('ode_global"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" cache "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"F:'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("ode"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('ode_cache"')]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("ps：我的node安装文件夹是 "),n("code",[s._v('"F:\\node')])])])]),s._v(" "),n("li",[n("p",[s._v("使用如下命令替换npm镜像为阿里云镜像")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"yarn的安装-windows"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yarn的安装-windows"}},[s._v("#")]),s._v(" Yarn的安装(Windows)")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("直接命令安装，以及更换镜像即可。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n查看版本：yarn --version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org -g\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);