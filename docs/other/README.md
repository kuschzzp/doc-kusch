---
title: Other
lang: zh-CN
---

# 没有啥，看左边去





# Test

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
