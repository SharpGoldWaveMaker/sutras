<template>
  <Collapse
    :flat="flat"
    :disable-magic="data['@first']"
    :force-magic="!data['@des']"
  >
    <slot />
    <ArrayName :data="data"/>[<template
        v-for="(item, index) in generateDescriptorArray(data['@des']!['@value'], data['@size'])"
        :key="index"
      >
        <span
          v-if="item.empty"
          class="array-size mr-0"
          :key="index"
          >&lt;empty&gt; x {{ item.count }}
        </span>
        <ConsoleValueStatic
          v-else
          :data="item['value']['@value']"
          hide-name-object
        />
        <span v-if="data['@size'] - 1 > item.index" class="comma">,</span>
      </template>
      <template v-if="data['@t'] === 'typedarray'">
        ,
        <template v-for="key in extendsKeysTypedArray" :key="key">
          <PropName
            :hidden="data['@des']!['@value'][key.toString()]['@hidden']"
            :name="key.toString()"
            preview
          />
          <ConsoleValueStatic
            :data="data['@des']!['@value'][key.toString()]['@value']"
            hide-name-object
          />
          <span class="comma">,</span>
        </template> 
      </template>]

    <template #summary-opened>
      <slot />
      <ArrayName :data="data"/>
    </template>

    <template #content>
      <ConsoleLink
        :link="data['@real']"
      />
    </template>
  </Collapse>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import Collapse from '../../components/collapse'
import type { ConsoleItemData, PObjReal } from '../../definition'
import { keys as extendsKeysTypedArray } from "../../core/getOwnDescriptorsTypedArray"
import ConsoleLink from '../../components/console-link'
import PropName from '../../components/prop-name'
import ConsoleValueStatic from '../../components/console-value-static'
import ArrayName from './array-name.vue'

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

function generateDescriptorArray(des: PObjReal, size: number) {
  const newDes: (
    | {
        empty: true
        index: number
        count: number
      }
    | {
        empty: false
        index: number
        value: PObjReal[""]
      }
  )[] = []

  let countEmpty = 0
  for (let i = 0; i < size; i++) {
    if (!des[i]) {
      countEmpty++
      continue
    }

    if (countEmpty) {
      newDes.push({
        empty: true,
        index: i,
        count: countEmpty
      })
      countEmpty = 0
    }

    newDes.push({
      empty: false,
      index: i,
      value: des[i]
    })
  }

  if (countEmpty) {
    newDes.push({
      empty: true,
      index: size - 1,
      count: countEmpty
    })
    countEmpty = 0
  }

  return newDes
}

</script>