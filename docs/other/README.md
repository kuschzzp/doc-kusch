---
title: Other
lang: zh-CN
---

# 引导

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
    async mounted() {},
  }
</script>
<style>
  .box-vue {
    color: red;
  }
</style>
```

:::
