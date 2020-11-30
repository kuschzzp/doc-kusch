# 关于vuepress项目设置了根路径，导致部署上nginx静态资源无法访问的问题记录

## 场景概述
当你在你的vuepress项目设置了根路径，那么你的build之后的所有资源都会带上你的根路径访问。
例如：
```
module.exports = {
  title: '小破站',
  description: 'JUST FOR FUN',
  base: '/superman/',   // 设置站点根路径
  port: 8080,
  }
```
## 问题发生
部署上nginx后，导致访问index.html没有问题，但是其中的所以资源都带上了`/superman/`。
例如：
```html
	<link rel="icon" href="/superman/images/photo.jpg">
    <link rel="manifest" href="/superman/images/photo.jpg">
    <link rel="apple-touch-icon" href="/superman/images/photo.jpg">
```
部署上nginx后的产生问题的配置文件：
```js
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
        listen       5678;
        server_name  localhost;
        location / {
            root   /usr/local/webapp/ROOT;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

修改后正确显示的配置文件：
```js
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
        listen       5678;
        server_name  localhost;
        location / {
            root   /usr/local/webapp/ROOT;
            index  index.html index.htm;
        }
	location /superman/ {    			// 增加的
	proxy_pass http://127.0.0.1:5678/; // 增加的
	}									// 增加的
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```