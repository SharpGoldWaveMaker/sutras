<template>
  <Collapse
    :flat="flat"
    :disable-magic="data['@first']"
    :force-magic="!data['@des']"
  >
    <slot />
    <span class="array-size" v-if="!hideNameObject">{{ data["@name"] }}</span>{<template v-for="(item, name) in data['@des']?.['@value']" :key="name">
      <PropName :hidden="item['@hidden']" :name="name + ''" preview />
      <ConsoleValueStatic
        :data="item['@value']"
        hide-name-object
      />
      <span class="comma" v-if="name !== data['@des']!['@lastKey']"
        >,</span
      > </template
    >}

    <template #summary-opened>
      <slot />
      <template v-if="!hideNameObject">{{ data["@name"] }}</template>
    </template>

    <template #content>
      <!-- @real is link -->
      <ConsoleLink
        v-if="data['@real']?.['@t'] === 'link'"
        :link="(data['@real'] as DLink)"
      />
      <!-- /@real is link -->

      <template
        v-else
        v-for="(item, name) in (data['@real'] as  DObjReal )"
        :key="name"
      >
        <!-- get/set -->
        <template v-if="item['@value']['@t'] === 'gs'">
          <!-- @value -->
          <div class="ml-4">
            <PropName :hidden="item['@hidden']" :name="name + ''" />
            <GetterField
              :getter="item['@value']['@value']"
              class="truncate"
            />
          </div>
          <!-- /@value -->

          <ConsoleValue
            v-for="(encoded, actName) in item['@value']['@at']"
            :key="actName"
            :data="encoded!"
            class="truncate"
          >
            <PropName hidden :name="actName + ' ' + name" />
          </ConsoleValue>
        </template>

        <ConsoleValue
          v-else
          :data="item['@value'] as EncodeTypeResult"
          :hide-name-object="
            typeof name === 'string' && !(name as string)?.startsWith('[[') && (item['@value'] as any)?.['@name'] === 'Object'
          "
        >
          <PropName :hidden="item['@hidden']" :name="name + ''" />
        </ConsoleValue>
      </template>
      <!-- /@real -->
    </template>
  </Collapse>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import Collapse from '../components/collapse'
import type { ConsoleItemData, DLink, DObjReal } from '../definition'
import ConsoleLink from '../components/console-link'
import PropName from '../components/prop-name'
import ConsoleValueStatic from '../components/console-value-static'
import GetterField from '../components/getter-field'
import ConsoleValue from '../components/console-value'
import type { EncodeTypeResult } from '../core/encode';

defineOptions({
  inheritAttrs: false
})

defineProps({
  data: {
    type: Object as PropType<ConsoleItemData>,
    required: true
  },
  flat: Boolean,
  hideNameObject: Boolean
})
</script>