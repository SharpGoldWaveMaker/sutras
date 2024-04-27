<template>
  <Collapse
    :flat="flat"
    :only-btn="data['@first']"
  >
    <slot/>
    <span class="regexp">{{ data["@name"] }}</span>
    <template #content>
      <ConsoleLink
        :link="data['@real']!"
      />
    </template>
  </Collapse>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import Collapse from '../components/collapse'
import type { ConsoleItemData } from '../definition'
import ConsoleLink from '../components/console-link'

defineOptions({
  inheritAttrs: false
})

defineProps({
  data: {
    type: Object as PropType<ConsoleItemData>,
    required: true
  },
  flat: Boolean
})
</script>