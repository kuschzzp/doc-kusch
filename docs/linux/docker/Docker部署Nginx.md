---
title: Docker部署Nginx
author: kusch
top: false
summary: Docker部署Nginx
categories: Markdown
---
## 部署

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

启动

    docker run --name nginxKusch --privileged=true -p 5588:80 -v /home/nginx/nginx.conf:/etc/nginx/nginx.conf -v /home/nginx/vhost:/home/nginx/vhost -v /home/nginx/logs/nginx_error.log:/home/nginx/logs/nginx_error.log -v /home/nginx/www:/home/nginx/www -d nginx

> -d: 后台运行容器，并返回容器UUID（常用）

> -i: 以交互模式运行容器，通常与 -t 同时使用

> -t: 为容器重新分配一个伪输入终端，通常与 -i 同时使用

> v, –volume=[] 给容器挂载存储卷，挂载到容器的某个目录（常用）

> –privileged=false 指定容器是否为特权容器，特权容器拥有所有的capabilities

> –name=”” 指定容器名字（如mynginx），后续可以通过这个容器名字进行容器管理（常用）

参考博文：[点击这里](https://blog.csdn.net/qq_41291945/article/details/107898035)
