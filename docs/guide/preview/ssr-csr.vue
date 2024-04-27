<template>
  <Space direction="vertical">
    <Button v-if="clientOnly"  type="primary">Client Only Button</Button>
    <Button @click="count ++ ">
      {{ clientOnly ? 'Click Me：' : '@click will not trigger in SSR mode：' }}
      {{ count }}
    </Button>
  </Space>
</template>

<script setup lang="ts">
import { Space, Button } from 'ant-design-vue'
import { onMounted, ref } from 'vue';

const clientOnly = ref(false)
const count = ref(0)

// onMounted hook will not called in SSR mode
onMounted(() => {
  clientOnly.value = true
})

</script>

<docs lang="md">
---
defaultPreviewMode: 'browser'
defaultCodeCollapse: false
enableSSR: true
---
</docs>