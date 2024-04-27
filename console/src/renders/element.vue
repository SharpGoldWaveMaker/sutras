<template>
  <template v-if="data['@first']">
      <template v-if="data['@name'] === '#text'">
        "{{ data["@childs"] }}"
      </template>
      <template v-else-if="data['@name'] === '#cdata-section'">
        {{ data["@childs"] }}
      </template>
      <span v-else-if="data['@name'] === '#comment'" class="element-comment">{{
        data["@childs"]
      }}</span>
      <span v-else-if="data['@name'] === 'html'" class="element-doctype">{{
        data["@childs"]
      }}</span>
      <Collapse
        v-else-if="data['@name'].startsWith('#')"
        :only-btn="data['@real'] !== undefined"
      >
        {{ data["@name"] }}

        <template #content>
          <ConsoleLink
            :link="data['@real']!"
          />
        </template>
      </Collapse>

      <Collapse
        v-else
        :only-btn="!data['@childs'] || typeof data['@childs'] === 'string'"
        class-detail="l7"
      >
        <span class="element-tag">
          &lt;{{ data["@name"].toLowerCase().replace(/^#/, "")
          }}<span
            v-for="([key, value], index) in data['@attrs']"
            :key="key"
            :class="{
              'ml-1': index === 0,
              'mr-1': index < data['@attrs']!.length - 1
            }"
          >
            <span class="element-propName">{{ key }}="</span>
            <span class="element-propValue">{{ value }}</span>
            <span class="element-propName">"</span> </span
          >&gt;</span
        >
        <span v-if="data['@childs']">{{
          typeof data["@childs"] === "string" ? data["@childs"] : "…"
        }}</span>
        <span class="element-tag"
          >&lt;/{{ data["@name"].toLowerCase().replace(/^#/, "") }}&gt;
        </span>

        <template #content>
          <ConsoleValue
            :data="listLinkAsync"
          />
        </template>
      </Collapse>
    </template>
    <Collapse v-else :flat="flat">
      <slot />
      <span class="element-tag">{{
        data["@name"].toLowerCase().replace(/^#/, "")
      }}</span>

      <template #content>
        <ConsoleLink
          :link="(data['@real'] as DLink)"
        />
      </template>
    </Collapse>
</template>

<script setup lang="ts">
import { inject, shallowRef, toRaw, toRefs, watch } from 'vue'
import type { PropType } from 'vue';
import Collapse from '../components/collapse'
import type { ConsoleItemData, DLink } from '../definition'
import type {
  EncodeTypeResult,
} from "../core/encode"
import { ConsoleLinkParserInjectKey } from '../hooks';
import ConsoleLink from '../components/console-link'
import ConsoleValue from '../components/console-value'

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  data: {
    type: Object as PropType<ConsoleItemData>,
    required: true
  },
  flat: Boolean
})

const {data} = toRefs(props)

const listLinkAsync = shallowRef<EncodeTypeResult>()

const { _getListLinkAsync } = inject(ConsoleLinkParserInjectKey)!

watch(() => data.value['@childs'], link => {
  _getListLinkAsync?.(toRaw(link))?.then((response) => {
    listLinkAsync.value = response
  })
})
</script>