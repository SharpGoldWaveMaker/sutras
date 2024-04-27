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
defaultDevice: 'iPhone X'
previewHeight: 500
---
</docs>