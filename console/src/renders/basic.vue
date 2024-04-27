<template>
  <div
    v-bind="attrs"
  >
    <slot />
    <ConsoleValueStatic
      :data="data"
      :is-log="isLog"
      full
      :first="data['@t'] === 'string' ? data['@first'] : false"
    />
</div>
</template>

<script setup lang="ts">
import { useAttrs, type PropType } from 'vue';
import type { ConsoleItemData } from '../definition'
import ConsoleValueStatic from '../components/console-value-static'

defineOptions({
  inheritAttrs: false
})

defineProps({
  data: {
    type: Object as PropType<ConsoleItemData>,
    required: true
  },
  flat: Boolean,
  isLog: Boolean
})

const attrs = useAttrs()
</script>