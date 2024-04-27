<template>
  <template v-if="data['@first']">{{ data["@code"] }}</template>
    <Collapse v-else :flat="flat">
      <slot />
      <span class="function">
        <template v-if="data['@header'].typeFn !== 1">
          <span class="char-f"
            >{{ data["@header"].isAsync ? "async " : "" }}ƒ{{
              data["@header"].isStar ? "*" : ""
            }}</span
          >
          {{ data["@header"].name }}{{ data["@header"].args }}
        </template>
        <template v-else>
          {{ data["@header"].args }} => {{ data["@header"].content ?? "…" }}
        </template>
      </span>

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