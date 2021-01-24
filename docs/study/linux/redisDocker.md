## docker 部署redis

* 拉取最新redis镜像

``` 
docker pull redis
```

* 创建映射目录

``` 
cd /home/zzp
mkdir redis
mkdir redis/data
mkdir redis/config
 
创建redis.conf配置文件
touch redis/config/redis.conf

百度下载一个redis.conf
```

下载：[点击这里](http://download.redis.io/redis-stable/redis.conf)

* 修改redis.conf

``` 
bind 127.0.0.1 		#注释掉这部分，这是限制redis只能本地访问
protected-mode no 	#默认yes，开启保护模式，限制为本地访问
requirepass 密码		#增加启动密码
appendonly yes      #持久化默认no，改成yes
```

* 运行命令

``` 
docker run --name redis-kusch -p 16379:6379 --restart=always -v /home/zzp/redis/data:/data -v /home/zzp/redis/config/redis.conf:/etc/redis/redis.conf --privileged=true -d redis redis-server /etc/redis/redis.conf
```

::: tip

命令解释
–restart always：开机启动
–privileged=true：提升容器内权限
-v /home/zzp/redis/data:/data：映射数据
-v /home/zzp/redis/config/redis.conf:/etc/redis/redis.conf：映射配置文件
-d : 后台运行
redis-server /etc/redis/redis.conf : 配置文件方式启动
:::

* 继续进入容器，测试一下设置一个值

``` 
docker exec -it redis-kusch  /bin/bash

redis-cli

auth 你的密码

set qwe qqweqweqwe

get qwe

```
