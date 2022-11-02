# MYSQL使用binlog恢复数据

## 恢复

**查看是否开启了binlog，如果没有的话，那么使用 binlog 的方式就无法实现数据恢复了（可以寻找其他方式，也不是完全无药可救）**

我是使用docker部署的mysql，所以先进入容器之后再开始操作
![进入容器](http://cdn.gulei.love/docs/WeChat7ad79de81b342fe3b3aeede629b84e5b.png)

```shell
docker exec -it mysql8 /bin/bash
```

进入到蓝箭头状态之后开始查询信息与分析信息。
> 我的操作是先新建数据库，新建三张表，每张表插入数据，这写操作代表正常操作。  
> 然后删除三张表，新建一张入侵提示表，模拟被入侵并删除了所有的表。

先进入mysql的命令行，也就是登录一下：

```shell
mysql -uroot -p密码
```

输入命令查看是否开启了binlog，如下图，如果显示没开启的话，那可以出门右转了。

```shell
show variables like 'log_%'; 
```

![rizhi](http://cdn.gulei.love/docs/WeChatbd9aef3b14a909d536f7657664b41da2.png)

那接下来就是要分析恢复的开始点和结束点了

```shell
show master logs;
```

![111](http://cdn.gulei.love/docs/WeChatae19cfce2267590fbbd7732f59356124.png)

因为我删除之后重启了一次mysql，所以最后一个的 3 不是我需要的，我要的所有信息大部分是在 2 下面，下面看看2中删除关键表的语句出现点，大概就能确定是那边了。

```shell
show binlog events in 'binlog.000002';
```

下面是刚开始，可以看到我创建我的张三数据库的语句，对应 235，下面找结束点

![s](http://cdn.gulei.love/docs/WeChat908a2a2b45a836ac51b38375a50b50aa.png)

下图可见出现删除表的语句是在 11630 那我需要的点肯定是它前面的 11522

![e](http://cdn.gulei.love/docs/WeChatb24c4d0a3a8ba7830f3cec18c68b490c.png)

那下面执行语句开始恢复吧，先执行 `exit;` 退出mysql操作窗口，回到容器内操作窗口。

查找这个文件在哪里

```shell
find / -name binlog.000002
```

![1](http://cdn.gulei.love/docs/WeChat1d7f1c464e0ed5107f1bdb4117bfdc85.png)

记住这个地址，然后填入下面恢复的命令中

```shell
mysqlbinlog --no-defaults  /var/lib/mysql/binlog.000002 --start-position=235 --stop-position=11522  | mysql -uroot -p密码
```

![ccc](http://cdn.gulei.love/docs/WeChate06dd7cf1983049ecea43978e77e6dda.png)

执行完竟然报错了，看报错原因，很明显是数据库zhangsan还在，上面也说了，我是从创建数据库那里开始的，所以，我先去吧数据库张三删了，再执行一遍

![cccs](http://cdn.gulei.love/docs/WeChatbac5187b0880ed9e19a1351ff2021863.png)


可见没有报错，那我们去看看数据在不在了

![asdas](http://cdn.gulei.love/docs/WeChat5102aaa366490e5e40afac402a4a16db.png)

哈哈，数据库和数据都回来了，但是这只是演示，实际情况那个 binlog.000002 文件不会那么容易分析的，我演示只有三张表，寥寥几条数据而已。

## 可能遇到的其他问题

### bash: mysqlbinlog: command not found

![111213](http://cdn.gulei.love/docs/WeChat9ce4c034caf2aba9f423e373411d1f2f.png)

这个其实就是你的 mysqlbinlog 文件不存在于 /usr/bin 下面

![meiy](http://cdn.gulei.love/docs/WeChat403aa838436a32fa057f076ef59b16c8.png)

这时候就搜索一下，如果找到了 mysqlbinlog，做个软连接到 /user/bin 下就可以了，如果没找到，那就头大了，
我是M1的macbook安装的arm的centos7虚拟机，虚拟机上安装docker，docker安装mysql，死活就是找不到mysqlbinlog文件，
然后借用别人的windows上的虚拟机进行操作，一点问题没有，mysql装完 mysqlbinlog 就在 /usr/bin下面了，奇了个大怪。

搜索命令
```shell
find / -name mysqlbinlog
```

软连接命令
```shell
ln -s 你找到的不在/usr/bin下的mysqlbinlog  /usr/bin
```