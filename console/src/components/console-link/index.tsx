import { defineComponent, shallowRef, toRaw, watchEffect } from 'vue'
import type { PropType } from 'vue'
import type { EncodeTypeResult } from '../../core/encode'
import type { DLink } from '../../definition'
import ConsoleValue from '../console-value'
import { useConsoleLinkParser } from '../../hooks'

const ConsoleLink = defineComponent({
  name: 'ConsoleLink',
  inheritAttrs: false,
  props: {
    link: {
      type: Object as PropType<DLink>,
      required: true,
    },
  },
  setup(props) {
    const data = shallowRef<EncodeTypeResult>()
    const { readLinkObjectAsync } = useConsoleLinkParser()
    let loaded = false
    watchEffect(() => {
      if (props.link && !loaded) {
        readLinkObjectAsync(toRaw(props.link))?.then((response) => {
          data.value = response
          loaded = true
        })
      }
    })
    return () => {
      if (data.value) {
        return (
          <ConsoleValue
            data={data.value}
            flat
          />
        )
      }
      return 'loading...'
    }
  },
})

export default ConsoleLink
