<template>
  <Collapse :only-btn="data['@first']">
    <slot /><component
      :is="
        h(
          'span',
          parseLink(data['@stack'], { minifyLink: true, component: Anchor })
        )
      "
    />

    <template #content>
      <ConsoleLink
        :link="data['@real']!"
      />
    </template>
  </Collapse>
</template>

<script setup lang="ts">
import { h } from 'vue'
import type { PropType } from 'vue';
import { parseLink } from '../components/parseLink'
import Collapse from '../components/collapse'
import type { ConsoleItemData } from '../definition'
import { useLinkRender } from '../hooks';
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

const Anchor = useLinkRender()
</script>