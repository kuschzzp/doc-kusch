# 前端基础环境安装

## NodeJs的安装(windows)

1. 首先是去官网下载nodejs，下载地址：`https://nodejs.org/en/`。
2. 一路都是 next（下一步）。
3. 安装完成后`node -v`和`npm -v`查看版本，显示出版本就是正确安装了。

    > 如果显示 `node` 或者 `npm` 不是命令，就是没配置好环境变量！
    > 在 `Path` 那里添加值是你的node安装文件夹，以及下面要修改的 `node_global` 文件夹。
    > 另外如果需要的话，我们还需要添加一个 `NODE_PATH` 的环境变量，值是你安装目录下的 `node_modules` 文件夹位置。

4. 为了我们宝贵的C盘空间，需要去修改全局模块路径和缓存路径。
5. 这里将全局模块（node_global）和缓存（node_cache）放在了nodejs安装目录下. 在你的nodejs安装目录下创建这两个文件夹，名称分别为：`node_global`和`node_cache`，另外还需要在`node_global`里面添加一个文件夹`node_modules`。
6. 然后执行命令，修改默认文件夹为上面新建的两个文件夹。

    ``` shell
    npm config set prefix "F:\node\node_global"
    ```

    ``` shell
    npm config set cache "F:\node\node_cache"
    ```

    > ps：我的node安装文件夹是 `"F:\node`

7. 使用如下命令替换npm镜像为阿里云镜像

    ``` shell
    npm config set registry https://registry.npm.taobao.org
    ```

## Yarn的安装(Windows)

1. 直接命令安装，以及更换镜像即可。

    ``` shell
    npm install -g yarn
    查看版本：yarn --version
    ```

    ``` shell
    yarn config set registry https://registry.npm.taobao.org -g
    ```

    ``` shell
    yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
    ```

