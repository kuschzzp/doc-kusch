# 虚拟机下安装Mysql57

### Mysql5.7.30安装（LINUX centOS7 64位）

* 查看centOS是多少位的

		uname -a

* 就暂时选择将mysql放在/opt/application下吧（没有文件夹，就创建）

		cd /opt
		mkdir application

* 上传tar.gz文件，解压(这破名字太长，顺便改个名！)

		tar -zxvf 你的压缩包名  (如果后缀不是.gz就用tar -xvf)
		mv  A(原名)  B(新名)

		当然也可以选择删除安装包，毕竟寸土寸金
		rm -rf 名字
		-r 就是向下递归，不管有多少级目录，一并删除
		-f 就是直接强行删除，不作任何提示

* 配置环境变量

		vi /etc/profile

		按i输入
		按esc   ：   wq 保存退出

		在最后添加（根据自己的路径来）
		export PATH=/opt/application/mysql/bin:$PATH

		使其生效
		source /etc/profile

* 移除Linux默认数据库Maria DB

		rpm -qa | grep mariadb  查出版本

		yum remove 查出的结果 -y

* 在根目录下创建/data文件夹，作为数据和日志文件存储目录

		mkdir /data

* 创建mysql用户并授权，数据存储目录和软件安装目录都要授权

		useradd mysql
		chown -R mysql.mysql /opt/application/*
		chown -R mysql.mysql /data

* 初始化数据输出原始密码用于root用户第一次登录

		mkdir /data/mysql/data -p
		chown -R mysql.mysql /data
		mysqld --initialize --user=mysql --basedir=/opt/application/mysql --datadir=/data/mysql/data
	

* 更改密码

	
		SET PASSWORD FOR 'root'@'localhost' = PASSWORD('qwer1234');

* 查看启动状态(开启和关闭)

		service mysqld status
		service mysqld start
		service mysqld stop
		service mysqld restart
			
		或者
		systemctl start mysqld.service 启动
		systemctl stop mysqld.service 停止
		systemctl restart mysqld.service 重启

* Navicat连接(**记得关闭Linux上的防火墙**)

  + 创建用户(用户名@连接ip  by 密码)

		 `create user 'springuser'@'localhost' identified by 'password'`

  + 修改用户可访问的host域

		
		 `use mysql;`

		 `update user set host='%(或者指定IP)' where user = 'root';`

		

  + 授权

		 `grant all privileges on *.* to root@'%（或指定IP）' identified by 'password' with grant option;`

		\*.\*  代表   数据库.表		

		收回权限
		 `revoke all on *.* from root@'%';`

		
		查看某个用户的权限
		
		 `show grants for 'nextcloud'@'%'; `

		
		or
		
		 `select * from mysql.user where user='root'; `

 - 授予某个文件可执行权限

					
			chmod -x 文件
			

* 解压文件

		unzip 文件名.zip -d 解压出的文件名
		没有命令
		yum -y install unzip

* 查看运行日志

		tail -f 文件名.log

* 访问问题

	
			虚拟机用：curl    192.168.199.200:8080 可以访问
			但是主机访问不了

			设置将数据转发到本机的其他网卡设备上就可以了
			iptables -P FORWARD ACCEPT

			同时再检查一下防火墙关了没，没关就关一下
			systemctl status firewalld.service
