<script setup lang="ts">
import type { PropType } from 'vue'
import type { ConsoleItemData } from '../../definition'

defineOptions({
  inheritAttrs: false
})

defineProps({
  data: {
    type: Object as PropType<ConsoleItemData>,
    required: true,
  },
  flat: Boolean,
  isLog: Boolean,
})
</script>

<template>
  <span>
    {{ data['@name'] || 'Array' }}<span v-if="data['@size'] !== null">({{ data['@size'] }})</span>
  </span>
</template>
