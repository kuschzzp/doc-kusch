# 使用Nginx配置https访问，非使用七牛云自带的收费https访问

> 众所周知七牛云的https是收费的，http是有免费额度的，那么接下来我们使用自己的域名和服务器进行一次转发，来实现https访问，思路如下：  
> 1. 首先你有自己的域名，例如 `superkusch.fun`  
> 2. 然后，你在七牛云配置的https访问子域名是：`cdn.superkusch.fun`  
> 3. 再然后，需要一个**已经配置好https访问**的子域名，例如：`img.superkusch.fun`  
> 4. 最后就是通过将访问 `https://img.superkusch.fun` 的请求代理到 `http://cdn.superkusch.fun` 这样就OK了。  

**但要注意的是，这么搞虽然白嫖了，但是就损失了访问速度！！！！！！**

#### nginx配置文件例子如下
```shell
user  root;
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
        server_name img.superkusch.fun; # 二级域名地址
        return 301 https://$server_name$request_uri; # 重定向至 https 协议的域名地址 
    }

    # ------------------------------------------------------分界线 80 443 分界线----------------------------------------------------------------

    server {
        listen       443 ssl;        # 监听 443 端口
        server_name  img.superkusch.fun; # 二级域名地址

        ssl_certificate      /usr/local/nginx/cert/img.superkusch.fun_nginx/img.superkusch.fun_bundle.crt;      # ssl_certificate 对应路径
        ssl_certificate_key  /usr/local/nginx/cert/img.superkusch.fun_nginx/img.superkusch.fun.key;             # ssl_certificate_key 对应路径

        ssl_session_cache    shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;    # 加密算法
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;                                                        # 安全链接可选的加密协议
        ssl_prefer_server_ciphers on;                                                               # 使用服务器端的首选算法

        
        location / {
            proxy_pass http://cdn.superkusch.fun;
        }
    }
}

```
