---
title: 迷途指引者
description: 页面描述者
tags:
  - 导航
  - 指引
  - 首页
---

# 常用的一些网址记录

## 白嫖看视频类

[copy 视频网站的 URL 粘贴](https://mochu.co/tool/vip/#jk)

[BTNULL](https://www.btnull.re)

## 常用 API 类（视频、音乐下载解析 api 等）

[奔向导航页](https://tenapi.cn/)

[聚合去水印 api](https://docs.tenapi.cn/video.html#%E8%AF%B7%E6%B1%82url)

## Airport

[ikuuu](https://ikuuu.dev/auth/login)

[nanoport](https://v3.nanoport.xyz/#/login)

## 小工具

[空传](https://airportal.cn/)
::: demo

```html
<template>
  <div class="box-vue">
    <el-button type="primary">Vue {{ message }}</el-button>
  </div>
</template>
<script>
  export default {
    data: () => ({ message: 'Hello World' }),
    async mounted() {
      const { data } = await axios.get(
        'https://cdn.bootcdn.net/ajax/libs/axios/1.1.3/axios.js'
      )
      console.log(data)
    },
  }
</script>
<style>
  .box-vue {
    color: red;
  }
</style>
```

:::
