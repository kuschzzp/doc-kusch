---
title: Docker部署Elasticsearch 
author: kusch 
top: false 
summary: Docker部署Elasticsearch 
categories: Markdown
---

## ES

拉取镜像

```shell
docker pull elasticsearch:7.9.3
```

单节点运行，并设置内存大小，防止小内存服务器直接爆了

```shell
docker run -d --name=es -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms128m -Xmx1024m"  elasticsearch:7.9.3
```

**9300是多节点时通信用**

进入容器做一些配置 （可选吧，我不配置它确实是是没出现问题。）

```shell
#进入es容器内容
docker exec -it es /bin/bash
#修改es配置文件
vi /usr/share/elasticsearch/config/elasticsearch.yml
#添加以下配置（允许跨域）
http.cors.enabled: true
http.cors.allow-origin: "*"
# 最后重启即可
```

## Kibana

拉取镜像

```shell
docker pull kibana:7.9.3
```

运行
```shell
docker run -d --name kibana -p 5601:5601 kibana:7.9.3
```

进入容器，修改配置，kibana中文、es地址等配置
```shell
# 首先查看ES容器内部IP是多少，等会要去填的
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' es
# 进入kibana容器
docker exec -it kibana /bin/bash
# 编辑kibana配置文件
vi /usr/share/kibana/conf/kibana.yml
# 修改以下点：
i18n.locale: "zh-CN"
elasticsearch.hosts: [ "http://你刚才查的ip:9200" ]
# 最后重启即可
```

## 安装IK分词器插件、Ingest Attachment 插件

[ingest-attachment-7.9.3.zip----右键复制链接下载](http://cdn.gulei.love/docs/ingest-attachment-7.9.3.zip)

[elasticsearch-analysis-ik-7.9.3.zip----右键复制链接下载](http://cdn.gulei.love/docs/elasticsearch-analysis-ik-7.9.3.zip)

下载好了放到服务器上，然后拷贝到容器当中去
```shell
docker cp elasticsearch-analysis-ik-7.9.3.zip es:/opt/
docker cp ingest-attachment-7.9.3.zip  es:/opt/
# 命令格式：docker cp 你的文件  容器:容器内文件
```
![如图](http://cdn.gulei.love/docs/WeChat931a24ab064d3f4d15c11fa7d44d0423.png)

我这里是将两个压缩包放在了容器内的`/opt` 下面，然后进入ES容器，进入ES的`bin`文件夹执行下面的命令安装
```shell
# 进入容器 
docker exec -it es /bin/bash

#安装命令
/usr/share/elasticsearch/bin/elasticsearch-plugin install file:///opt/ingest-attachment-7.9.3.zip
```
![如图](http://cdn.gulei.love/docs/WeChat95ea07a809f035be40f26711ae2d2936.png)

另外一个也是一样的。

最后执行如下命令看看两个插件是否都有了
```shell
/usr/share/elasticsearch/bin/elasticsearch-plugin list
```
![1](http://cdn.gulei.love/docs/WeChat7dd42cc51c43493606f3699a2769beb1.png)

**最后退(exit)出容器，重启（docker restart es）ES即可。**