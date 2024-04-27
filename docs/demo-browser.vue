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

console.time()
console.warn('警告信息！')
console.log(Space)
console.group('debug')
console.debug('I am a DEBUG')
console.groupEnd()
console.timeEnd()
</script>

<docs lang="md">
---
title: Button的类型
badge: warning-browser mode
defaultPreviewMode: 'browser'
---
按钮有五种类型：`主按钮`、`次按钮`、`虚线按钮`、`文本按钮`和`链接按钮`。
主按钮在**同一个操作区域最多出现一次**。
</docs>