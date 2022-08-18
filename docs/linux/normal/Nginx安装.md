# centOS中Nginx的安装

## 一：Nginx准备环境的安装

### gcc的安装

gcc是linux下的编译器，所以需要安装。

``` shell
# 查看版本
gcc -v
```

``` shell
# 查看没查看到就安装
yum -y install gcc
```

### pcre安装

pcre是一个perl库，包括perl兼容的正则表达式库，nginx的http模块使用pcre来解析正则表达式，所以需要安装pcre库。

``` shell
# 安装
yum install -y pcre pcre-devel
```

### zlib安装

zlib库提供了很多种压缩和解压缩方式nginx使用zlib对http包的内容进行gzip，所以需要安装。

``` shell
# 安装
yum install -y zlib zlib-devel
```

### openssl安装

openssl是web安全通信的基石，所以需要。

``` shell
# 安装
yum install -y openssl openssl-devel
```

## 二：开始安装Nginx

> Nginx下载地址：http://nginx.org/en/download.html

### Nginx下载

下载方式分为两种：

* 手动下载，自己用工具上传。
* 命令下载，此处以命令方式距离。

``` shell
# 下载nginx安装包
wget http://nginx.org/download/nginx-1.18.0.tar.gz

# 注意：提示没有wget命令，用下面命令安装
yum -y install wget
```

下载完成后，将安装包移动到 `/usr/local/nginxhere` 下，如果没有文件夹请创建，具体命令如下：

``` shell
# 切换目录
cd /usr/local

# 创建文件夹
mkdir nginxhere

# 移动文件
mv /usr/local/nginx-1.18.0.tar.gz /usr/local/nginxhere/nginx-1.18.0.tar.gz 

```

### Nginx解压安装

1. 解压

``` shell
tar -zxvf nginx-1.18.0.tar.gz 
```

2. 进入文件夹

``` shell
cd nginx-1.18.0
```

3. 运行如下三个命令

``` shell
./configure
 
make
 
make install
```

4. 进入nginx目录

``` shell
cd /usr/local/nginx/sbin
```

5. 然后运行如下命令启动：

``` 

./nginx
```

6. 查看运行状态

``` 

ps -ef | grep nginx
```

### 将Nginx配置进环境变量

``` shell
# 第一步
vi /etc/profile

# 第二步
PATH=$PATH:/usr/local/nginx/sbin
export PATH

# 第三步
source /etc/profile

#第四步
nginx -s reload
```

### 尝试修改Nginx配置文件

1. 尝试修改端口为5678

``` shell
# 进入目录
cd /usr/local/nginx/conf

# 输入
vi nginx.conf

# 找到80修改成5678即可
```

2. 访问测试

* 虚拟机内访问：

    

``` shell
    curl 192.168.199.229:5678
    ```

* 还可以在主机浏览器访问，主机浏览器访问记得放行端口，或者直接关闭防火墙。

``` shell
# 关闭防火墙
systemctl stop firewalld.service

# 放行端口
firewall-cmd --zone=public --add-port=5678/tcp --permanent  
```

### 常用命令

1. 停止Nginx

``` shell
./nginx -s stop
```
## 三：挂载数据卷以及一些命令解释

 - 获取最新版的 Nginx 镜像

		docker pull nginx:latest


 - 运行容器

		docker run --name nginx-test -p 8080:80 -d nginx

  > --name nginx-test：容器名称。  
	-p 8080:80： 端口进行映射，将本地 8080 端口映射到容器内部的 80 端口。  
	-d nginx： 设置容器在在后台一直运行。


 - 进入某个容器

		docker exec -it <容器id> /bin/bash

 - 自定义nginx配置和挂载存储卷

 > - 定义nginx.conf配置文件，放置于宿主机（服务器）的/home/nginx目录下

 > - 用于include的vhost目录，从而方便管理，放置于宿主机（服务器）的/home/nginx目录下

 > - 定义WEB的根目录www，放置于宿主机（服务器）的/home/nginx目录下

 > - 创建两个日志追踪文件nginx_error.log和access.log，放置于宿主机（服务器）的/home/nginx/logs目录下

		docker run --name nginxKusch --privileged=true -p 5588:80 -v /home/nginx/nginx.conf:/etc/nginx/nginx.conf -v /home/nginx/vhost:/home/nginx/vhost -v /home/nginx/logs/nginx_error.log:/home/nginx/logs/nginx_error.log -v /home/nginx/www:/home/nginx/www -d nginx

 > -d: 后台运行容器，并返回容器UUID（常用）

 > -i: 以交互模式运行容器，通常与 -t 同时使用

 > -t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用

 > v, –volume=[] 给容器挂载存储卷，挂载到容器的某个目录（常用）

 > –privileged=false 指定容器是否为特权容器，特权容器拥有所有的capabilities

 > –name=”” 指定容器名字（如mynginx），后续可以通过这个容器名字进行容器管理（常用）

 参考博文：[点击这里](https://blog.csdn.net/qq_41291945/article/details/107898035)


## Nginx配置文件详解（待补充------>）
