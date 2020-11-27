---
title: centos7Mini安装完成后的网络设置
author: kusch
top: false
summary: centos7 mini 安装完成后的网络设置
categories: Markdown
tags:

  + centos7

---

# centOS7 mini版设置网络

## 方式一 类似图形化修改

首先用命令查看当前的网卡状态

``` shell
nmcli d
```

![图片1](https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork1.png)

然后使用命令，并入下图所示方式修改

``` shell
nmtui
```

::: details 点击查看操作图片

![图片2](https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork2.png)

 

![图片3](https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork3.png)

 

![图片4](https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork4.png)

* 上一步操作完，使用`service network restart`重启一下网络即可使用`nmcli d`查看状态。 

![图片5](https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork5.png)

:::

## 方式二 修改配置文件方式

1. 同上，查看状态。
2. 使用命令`cd /etc/sysconfig/network-scripts`进入到指定文件夹。
![图片6](https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork6.png)
3. 用`ls` 查看存在的文件，使用`vi ifcfg-ens33`来修改文件（注意，不一定是叫这个名字，根据实际情况定！），进入后使用`i`开启编辑，修改完成后，按`ESC`，`:wq`退出，然后使用`service network restart`重启一下网络即可使用`nmcli d`查看状态。
![图片7](https://doc-kush-1302134273.cos.ap-nanjing.myqcloud.com/centosNetwork7.png)