(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{582:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"虚拟机下安装mysql57"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机下安装mysql57"}},[s._v("#")]),s._v(" 虚拟机下安装Mysql57")]),s._v(" "),a("h3",{attrs:{id:"mysql5-7-30安装-linux-centos7-64位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql5-7-30安装-linux-centos7-64位"}},[s._v("#")]),s._v(" Mysql5.7.30安装（LINUX centOS7 64位）")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("查看centOS是多少位的")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("就暂时选择将mysql放在/opt/application下吧（没有文件夹，就创建）")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" application\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("上传tar.gz文件，解压(这破名字太长，顺便改个名！)")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf 你的压缩包名  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如果后缀不是.gz就用tar -xvf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v("  A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("原名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("新名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n\t当然也可以选择删除安装包，毕竟寸土寸金\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf 名字\n\t-r 就是向下递归，不管有多少级目录，一并删除\n\t-f 就是直接强行删除，不作任何提示\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("配置环境变量")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n\n\t按i输入\n\t按esc   ：   wq 保存退出\n\n\t在最后添加（根据自己的路径来）\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/application/mysql/bin:"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v("\n\n\t使其生效\n\t"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("移除Linux默认数据库Maria DB")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" mariadb  查出版本\n\n\t\tyum remove 查出的结果 -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("在根目录下创建/data文件夹，作为数据和日志文件存储目录")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("创建mysql用户并授权，数据存储目录和软件安装目录都要授权")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" mysql\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql.mysql /opt/application/*\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql.mysql /data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("初始化数据输出原始密码用于root用户第一次登录")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data/mysql/data -p\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R mysql.mysql /data\n\t\tmysqld --initialize --user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql --basedir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/application/mysql --datadir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/mysql/data\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("更改密码")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t\tSET PASSWORD FOR "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" PASSWORD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'qwer1234'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("查看启动状态(开启和关闭)")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld status\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld start\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld stop\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart\n\t\t\t\n\t\t或者\n\t\tsystemctl start mysqld.service 启动\n\t\tsystemctl stop mysqld.service 停止\n\t\tsystemctl restart mysqld.service 重启\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("Navicat连接("),a("strong",[s._v("记得关闭Linux上的防火墙")]),s._v(")")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("创建用户(用户名@连接ip  by 密码)")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  `create user 'springuser'@'localhost' identified by 'password'`\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改用户可访问的host域\n"),a("code",[s._v("use mysql;")]),a("br"),s._v(" "),a("code",[s._v("update user set host='%(或者指定IP)' where user = 'root';")])])]),s._v(" "),a("li",[a("p",[s._v("授权\n"),a("code",[s._v("grant all privileges on *.* to root@'%（或指定IP）' identified by 'password' with grant option;")]),a("br"),s._v("\n*.*  代表   数据库.表  \t\t\n收回权限"),a("br"),s._v(" "),a("code",[s._v("revoke all on *.* from root@'%';")]),a("br"),s._v("\n查看某个用户的权限"),a("br"),s._v(" "),a("code",[s._v("show grants for 'nextcloud'@'%';")]),a("br"),s._v("\nor"),a("br"),s._v(" "),a("code",[s._v("select * from mysql.user where user='root';")])])]),s._v(" "),a("li",[a("p",[s._v("授予某个文件可执行权限  \t\t\n"),a("code",[s._v("chmod -x 文件")])])])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("解压文件\n"),a("code",[s._v("unzip 文件名.zip -d 解压出的文件名")]),a("br"),s._v("\n提示没有命令"),a("br"),s._v(" "),a("code",[s._v("yum -y install unzip")])])]),s._v(" "),a("li",[a("p",[s._v("查看运行日志"),a("br"),s._v(" "),a("code",[s._v("tail -f 文件名.log")])])]),s._v(" "),a("li",[a("p",[s._v("访问问题\n虚拟机用：curl    192.168.199.200:8080 可以访问\n但是主机访问不了")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("  \t设置将数据转发到本机的其他网卡设备上就可以了\n  \tiptables -P FORWARD ACCEPT\n\n  \t同时再检查一下防火墙关了没，没关就关一下\n  \tsystemctl status firewalld.service\n")])])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);