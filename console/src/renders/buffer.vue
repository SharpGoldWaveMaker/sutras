<template>
  <Collapse>
    <slot />{{ data["@name"] ?? "DataView" }}({{ data["@size"] }})

    <template #content>
      <ConsoleLink
        v-if="data['@real']['@t']"
        :link="data['@real']"
      />
    </template>
  </Collapse>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import Collapse from '../components/collapse'
import ConsoleLink from '../components/console-link'
import type { ConsoleItemData } from '../definition'

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