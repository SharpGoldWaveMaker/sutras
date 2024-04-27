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
defaultPreviewMode: 'browser'
---
</docs>