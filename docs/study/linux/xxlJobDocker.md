## xxl-job的Docker部署
:::tip
docker上面部署的什么版本的镜像，你的项目导包时最好使用相同版本，以避免出现乱七八糟的问题。  
===============时刻积累===============  
`systemctl start firewalld`   # 开启防火墙  
`firewall-cmd --zone=public --add-port=8080/tcp --permanent`   # 放行指定单个端口  
`firewall-cmd --zone=public --add-port=3306/tcp --add-port=6379/tcp --permanent`    # 添加放行指定单个端口  
`firewall-cmd --reload`       # 生效添加的要放行的端口  
`firewall-cmd --list-ports`   # 查看所有被放行的端口  
`firewall-cmd --zone=public --remove-port=8081/tcp --permanent`   # 取消指定一开放端口  
:::

#### 拉取镜像并且运行

:::warning
以2.2.0为例,注意你数据库的执行脚本也应该去2.2.0版本的代码里去找！!
:::

- 镜像拉取

```
docker pull xuxueli/xxl-job-admin:2.2.0
```

- 执行时的参数参数说明

```
docker run -d -p 8481:8777 -v /home/zzp/dockerlogshere:/data/applogs --name xxl-job-kusch001 -e PARAMS="--spring.datasource.url=jdbc:mysql://49.235.29.74:3306/blog?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&serverTimezone=UTC --spring.datasource.username=blog --spring.datasource.password=5PrzmTcJ3LPR8RNA --spring.datasource.driver-class-name=com.mysql.jdbc.Driver --spring.mail.host=smtp.qq.com --spring.mail.username=1526938209@qq.com --spring.mail.from=1526938209@qq.com --spring.mail.password=zsgpdnvdcetxjcje --server.port=8777"  xuxueli/xxl-job-admin:2.2.0
```

:::tip

docker run 的常见参数说明：

-d  ====》后台运行容器

-v 本地目录:容器目录  ====》将本机的目录挂载到容器目录中

--name ====》为容器取个名字

-p 主机端口：容器端口 ====》端口映射

-e 键=值 ====》设施环境变量
:::

#### 一些命令

- `docker ps -a`

- `docker info`

- `docker rm 容器id`

- `docker rmi 镜像id`

- `docker stop 容器id`