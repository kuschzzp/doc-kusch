---
title: Docker安装
author: kusch
top: false
summary: Docker安装
categories: Markdown
tags:
  - docker
---

# Docker安装

## 一: 安装

::: tip 注意
在新主机首次安装 Docker Engine-Community之前，需要设置Docker仓库，之后，您可以从仓库安装和更新 Docker。  

设置仓库，需要安装所需的软件包。yum-utils 提供了 yum-config-manager ，并且 device mapper 存储驱动程序需要   device-mapper-persistent-data 和 lvm2。
:::
  
1. **安装依赖包**

``` shell
 sudo yum install -y yum-utils device-mapper-persistent-data lvm2 
 ```

2. **设置阿里云镜像**

``` shell
sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo 
```

3. **安装Docker-CE**

``` shell
sudo yum install docker-ce
```

4. **启动Docker-CE和设置自启动**

``` shell
sudo systemctl start docker
```

``` shell
sudo systemctl enable docker
```

## 二: 设置

1. **Docker镜像加速**

 - 网易: `https://hub-mirror.c.163.com/`

 - 阿里云: `https://<你的ID>.mirror.aliyuncs.com`

 - 七牛云加速器: `https://reg-mirror.qiniu.com`

 - Docker中国区官方镜像: `https://registry.docker-cn.com`

 - 中国科技大学: `https://docker.mirrors.ustc.edu.cn`

**在 `/etc/docker/daemon.json` 文件（没有就自己去创建一下这个文件！）内填写如下内容:**

``` json
{
  "registry-mirrors":["https://ung2thfc.mirror.aliyuncs.com"]
}
```

2. **然后加载和重启Docker**

``` shell
sudo systemctl daemon-reload
```

``` shell
sudo systemctl restart docker
```

3. **查看是否成功(Mirror)**

``` shell
docker info
```

**如下:**

![图片1](/images/docker1.png)

## 三: 常用命令

1. **拉取镜像**
```shell
docker pull <镜像名:tag>
# 例如以下代码
docker pull jenkins/jenkins:ls
```

2. **删除容器**
```shell
docker rm <容器名 or ID>
```
3. **查看容器日志**
```shell
docker logs -f <容器名 or ID>
```
4. **查看正在运行的容器**
```shell
docker ps
docker ps -a # 为查看所有的容器，包括已经停止的。
```
5. **删除所有容器**
```shell
docker rm $(docker ps -a -q)
```
6. **停止、启动、杀死指定容器**
```shell
docker start <容器名 or ID> # 启动容器
docker stop <容器名 or ID> # 启动容器
docker kill <容器名 or ID> # 杀死容器
```
7. **查看所有镜像**
```shell
docker images
```
8. **后台运行**
```shell
docker run -d <Other Parameters>
# 例如
docker run -d -p 127.0.0.1:33301:22 centos6-ssh
```
9. **暴露端口**
```shell
# 一共有三种形式进行端口映射
docker -p ip:hostPort:containerPort # 映射指定地址的主机端口到容器端口
# 例如：docker -p 127.0.0.1:3306:3306 映射本机3306端口到容器的3306端口
docker -p ip::containerPort # 映射指定地址的任意可用端口到容器端口
# 例如：docker -p 127.0.0.1::3306 映射本机的随机可用端口到容器3306端口
docer -p hostPort:containerPort # 映射本机的指定端口到容器的指定端口
# 例如：docker -p 3306:3306 # 映射本机的3306端口到容器的3306端口
```

10. **映射文件夹**
```shell
docker -v /home/data:/opt/data # 这里/home/data 指的是宿主机的目录地址，后者则是容器的目录地址
```













