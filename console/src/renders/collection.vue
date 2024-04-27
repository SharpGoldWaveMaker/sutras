<template>
  <Collapse :flat="flat">
    <slot />
    <span class="array-size">
      {{ data["@name"] }}<template v-if="data['@size'] !== null">({{ data["@size"] }})</template>
    </span>
    <template v-if="data['@size'] === 0">
      {size: {{ data["@size"] }}}
    </template>
    <template v-else-if="data['@size'] !== null"
      >{<span v-for="(item, index) in data['@entries']" :key="index">
        <span v-if="data['@name'].endsWith('Map')">
          <ConsoleValueStatic
            :data="item[0]"
            hide-name-object
          />
          =>
          <ConsoleValueStatic
            :data="item[1]"
            hide-name-object
          />
        </span>
        <span v-else>
          <ConsoleValueStatic
            :data="item[0]"
            hide-name-object
          />
        </span>
        <span v-if="index < data['@size'] - 1" class="comma">,</span> </span
      >}
    </template>
    <template v-else>{}</template>

    <template #summary-opened>
      <slot />{{ data["@name"]
      }}<template v-if="data['@size'] !== null">({{ data["@size"] }})</template>
    </template>

    <template #content>
      <Collapse show>
        <PropName :hidden="false" name="[[Entries]]" />

        <template #content>
          <Collapse v-for="(item, index) in data['@entries']" :key="index">
            <PropName :hidden="false" :name="index + ''" />
            <span v-if="data['@name'].endsWith('Map')"
              >{<ConsoleValueStatic :data="item[0]" full/> =>
              <ConsoleValueStatic
                :data="item[1]"
                full
              />}</span
            >
            <span v-else>
              <ConsoleValueStatic :data="item[0]" full/>
            </span>

            <template #content>
              <ConsoleValue
                :data="{
                  '@t': 'object',
                  '@name': null,
                  '@first': false,
                  '@des': null,
                  '@real': {
                    ...(data['@name'].endsWith('Map')
                      ? {
                          key: {
                            '@hidden': false,
                            '@value': item[0]
                          }
                        }
                      : {}),
                    value: {
                      '@hidden': false,
                      '@value': item[1]
                    }
                  }
                }"
                flat
              />
            </template>
          </Collapse>
        </template>
      </Collapse>

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
import PropName from '../components/prop-name'
import ConsoleValueStatic from '../components/console-value-static'
import ConsoleLink from '../components/console-link'
import ConsoleValue from '../components/console-value'

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