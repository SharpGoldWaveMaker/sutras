<script setup lang="ts">
import type { PropType } from 'vue'
import type { ConsoleItemData } from '../definition'

defineOptions({
  inheritAttrs: false
})

defineProps({
  data: {
    type: Object as PropType<ConsoleItemData>,
    required: true,
  },
})
</script>

<template>
  <span>
    <slot />
    Nothing {{ data }}
  </span>
</template>
