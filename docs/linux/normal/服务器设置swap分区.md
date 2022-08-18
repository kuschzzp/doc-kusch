当CentOs安装完成后，就已经建立了swap分区，这是一块特殊的硬盘空间，即当实际内存不够用的时候，操作系统会从内存中取出一部分暂时不用的数据，放在交换分区中，从而为当前运行的程序腾出足够的内存空间。http://www.moguit.cn/info/96



查看磁盘使用状况：free -h

使用dd命令创建名为swapfile 的swap交换文件，这里命名为swapfile ,也可以命名为其他文件名:

具体计算公式为：1KB * 4194304 =1KB *1024(k)*1024*4 = 4194304 =4G

```text
dd  if=/dev/zero  of=/var/swapfile bs=1024  count=4194304
```

```text
格式化交换文件，转化因为swap分区：
mkswap /var/swapfile
```

```text
赋可读权限
chmod -R 0600 /var/swapfile
```

```text
挂载激活分区
swapon   /var/swapfile
```

```text
设置分区在开机的时候自动挂载
echo  "/var/swapfile   swap  swap  defaults  0  0" >>  /etc/fstab
```

```text
free -h
```