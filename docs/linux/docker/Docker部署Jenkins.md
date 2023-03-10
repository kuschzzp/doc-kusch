---
title: Docker安装Jenkins
author: kusch
top: false
summary: Docker安装Jenkins
categories: Markdown
tags:

  + jenkins
  + Markdown

---

# Docker安装Jenkins

## 一. Docker安装Jenkins

1. **拉取镜像安装**

``` shell
docker pull jenkins/jenkins:lts
```

2. **启动之前去建立一个Jenkins本地挂载目录,并且赋予容器里面的用户访问权限**

``` shell
mkdir /usr/local/jenkins
cd /usr/local/jenkins
mkdir jenkins_home
chown -R 1000 /usr/local/jenkins/jenkins_home
```

3. **运行Jenkins**

``` shell
docker run -d -v /usr/local/jenkins/jenkins_home:/var/jenkins_home -p 5418:8080 -p 50000:50000 jenkins/jenkins:lts
```

::: tip 补充
docker常用运行参数含义:  
`-d, --detach=false` 指定容器运行于前台还是后台，默认为false     
`-i, --interactive=false` 打开STDIN，用于控制台交互    
`-t, --tty=false` 分配tty设备，该可以支持终端登录，默认为false  
`-u, --user="" ` 指定容器的用户    
`-a, --attach=[] ` 登录容器（必须是以docker run -d启动的容器）  
`-w, --workdir=""` 指定容器的工作目录     
`-c, --cpu-shares=0 ` 设置容器CPU权重，在CPU共享场景使用      
`-e, --env=[] ` 指定环境变量，容器中可以使用该环境变量      
`-m, --memory=""` 指定容器的内存上限      
`-P, --publish-all=false ` 指定容器暴露的端口      
`-p, --publish=[]    ` 指定容器暴露的端口     
`-h, --hostname=""` 指定容器的主机名      
`-v, --volume=[]  ` 给容器挂载存储卷，挂载到容器的某个目录      
`--restart="no" ` 指定容器停止后的重启策略:    
`no：容器退出时不重启      
on-failure：容器故障退出（返回值非零）时重启     
always：容器退出时总是重启`

:::

4. **运行完成之后查看初始密码**

``` shell
docker ps -a # 找到你的Jenkins对应的CONTAINER ID
sudo docker exec 你的Id cat /var/jenkins_home/secrets/initialAdminPassword #保存一下,下面会用到
```

5. **访问你的服务器或者虚拟机的`IP+端口号`（端口号是上面运行时的`5418`，你可以随意修改，但是记得放行端口！）**

## 二. 设置Jenkins和安装常用的插件

1. **在输入框中输入你上面保存的密码。**

2. **选择安装推荐插件(失败也没关系，继续，后面会去下载需要的插件的)。**

3. **之后设置用户名密码，然后一路顺风，直到进入主页面。**

4. **下面去修改一下Jenkins的插件下载地址，防止等待一万年(方法如下)。**

::: details 点击查看
- 在左侧找到`Manage Jenkins`
![图片1](http://cdn.gulei.love/docs/jenkins1.png)
- 在右侧找到`Manage Plugins`  
![图片2](http://cdn.gulei.love/docs/jenkins2.png)
- 点击高级 
- 将最下方的连接修改为`https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json`  
![图片3](http://cdn.gulei.love/docs/jenkins3.png)
- 最后提交,等一会就行了。  
:::

5. **下载所需插件**

::: tip 重启小提示
重启Jenkins方式: 访问`ip+端口/restart` 点确定即可。  
:::

此处以部署一个最简单的springboot项目为例：

::: details 点击查看
- 安装所需工具  
在插件中搜索`Maven Integration`安装  
在插件中搜索`Gitee`安装即可

- 1. 如图找到全局工具配置
![图片4](http://cdn.gulei.love/docs/jenkins4.png)

- 2. 如下图所示自动安装Maven和JDK  
如果安装JDK时要输入Oracle账户:`2696671285@qq.com`,`Oracle123`  
![图片6](http://cdn.gulei.love/docs/jenkins6.png)
![图片5](http://cdn.gulei.love/docs/jenkins5.png)

:::