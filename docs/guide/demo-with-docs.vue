<template>
  <Space wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-vue'
</script>

<docs lang="md">
---
title: Button的类型
badge: tip-我是徽章
---
按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。
</docs>