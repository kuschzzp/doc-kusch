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
./configure \
--prefix=/usr/local/nginx \
--pid-path=/var/run/nginx/nginx.pid \
--lock-path=/var/lock/nginx.lock \
--error-log-path=/var/log/nginx/error.log \
--http-log-path=/var/log/nginx/access.log \
--with-http_gzip_static_module \
--http-client-body-temp-path=/var/temp/nginx/client \
--http-proxy-temp-path=/var/temp/nginx/proxy \
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
--http-scgi-temp-path=/var/temp/nginx/scgi \
--with-http_stub_status_module \
--with-http_ssl_module \
--with-file-aio \
--with-http_realip_module
 
 
 
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

### Nginx配置SSL证书

创建一个文件夹放你下载的证书压缩包

```shell

cd /usr/local/nginx

mkdir cert

cd cert
```

然后将证书压缩包上传到该文件夹下，并解压，完成后应该是下面这个样子
```shell
unzip 你的zip压缩包
```
![这样](http://cdn.gulei.love/docs/WeChat68d2bad1473135e33708430b2ca3340e.png)

里面应该是这些文件，记住位置后开始修改配置文件
![这些文件](http://cdn.gulei.love/docs/WeChatba123db0d72357040b233fb27fd88da7.png)

修改完成后的配置文件如下：

```
worker_processes  1;
events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen 80;  # 监听 80 端口
        server_name docs.superkusch.fun; # 二级域名地址
        root  html/ROOT; # 映射项目地址
        index index.html index.htm index.jsp; # 映射项目地址入口
        return 301 https://$server_name$request_uri; # 重定向至 https 协议的域名地址（新增的）
    }
    server {
        listen       443 ssl;        # 监听 443 端口
        server_name  docs.superkusch.fun; # 二级域名地址

        ssl_certificate      /usr/local/nginx/cert/docs.superkusch.fun_nginx/docs.superkusch.fun_bundle.crt;      # ssl_certificate 对应路径
        ssl_certificate_key  /usr/local/nginx/cert/docs.superkusch.fun_nginx/docs.superkusch.fun.key;             # ssl_certificate_key 对应路径

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;

        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    # 加密算法
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;                                                        # 安全链接可选的加密协议
        ssl_prefer_server_ciphers on;                                                               # 使用服务器端的首选算法

        location / {
            root html/ROOT;            # 映射项目地址
            index index.html index.htm index.jsp; # 映射项目地址入口
        }
        location /doc-kusch/ {    		
            proxy_pass https://docs.superkusch.fun/;
        }
    }
}

```





