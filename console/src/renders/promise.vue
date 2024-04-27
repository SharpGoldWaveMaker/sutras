<script setup lang="ts">
import type { PropType } from 'vue'
import type { ConsoleItemData } from '../definition'
import ConsoleValue from '../components/console-value'

defineOptions({
  inheritAttrs: false
})

defineProps({
  data: {
    type: Object as PropType<ConsoleItemData>,
    required: true,
  },
  flat: Boolean,
})
</script>

<template>
  <template v-if="data['@first']">
    <slot />{{
      data["@t"] === "promise" ? "Promise" : data["@value"]
    }}
  </template>
  <ConsoleValue
    v-else
    :data="{
      '@t': 'object',
      '@first': false,
      '@des': data['@des'],
      '@name': data['@t'] === 'promise' ? 'Promise' : data['@value'],
      '@real': data['@real']!,
    }"
    :flat="flat"
  >
    <slot />
  </ConsoleValue>
</template>
