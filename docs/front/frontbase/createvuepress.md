# 创建自己的vuepress项目

## 开始搭建

> 官网地址：https://www.vuepress.cn/guide/getting-started.html

1. 确保自己的Node.js版本>= 8.6，使用`node -v`查看，进入一个文件夹

``` shell
yarn init

# 输入完命令之后会跳出要你输入一些信息，第一个输入个项目名，下面的一路回车就行。
```

2. 添加vuepress

``` shell
yarn add -D vuepress
```

3. 创建文件夹docs，创建你的第一个Markdown文件

``` shell
mkdir docs
```

``` shell
echo '# 我的第一个文档！' > docs/README.md
```

4. 最后在`package.json`中添加如下内容，完整内容如下：

``` shell
{
  "name": "vuepress-test-kusch",
  "version": "1.0.0",
  "main": "index.js",
  "author": "kusch",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.7.1"
  },                            # 逗号别忘了
  "scripts": {                   # 新增
    "docs:dev": "vuepress dev docs",   # 新增
    "docs:build": "vuepress build docs" # 新增
  } # 新增
}

```

5. 运行，查看即可

``` shell
yarn docs:dev
```

 
::: tip 提示
如果出现乱码，就把 `README.md` 删除，手动新建一个。
:::

6. 一个基本的目录应该是这样的：

``` 

.
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```

`config.js` 中内容：

``` js
module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around'
}
```

## 使用主题（以官方的博客主题为例）

1. 安装

``` shell
yarn add @vuepress/theme-blog -D
```

2. config.js里面添加内容

``` shell
# .vuepress/config.js
module.exports = {
  theme: '@vuepress/blog',
  themeConfig: {
    // 请参考文档来查看所有可用的选项。
  }
}
```

3. 为了直观的看出效果，在你第一个创建的`README.md`中添加如下内容：

```
---
title: 五湖四海     
date: 2020-01-11
author: kusch
tags: 
  - JavaScript
  - Vue
location: Taipei  
---

> This is official blog theme.
# 牛逼

## 牛逼二号

### 牛逼三号

#### 牛逼四号

```

4. 运行查看

```
yarn docs:dev
```