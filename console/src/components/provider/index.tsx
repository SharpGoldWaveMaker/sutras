import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { type ConsoleLinkParser, type ConsoleTheme, provideConsoleLinkParser, provideConsoleTheme } from '../../hooks'
import type { LinkStore } from '../../core/encode'

const ConsoleProvider = defineComponent({
  name: 'ConsoleProvider',
  inheritAttrs: false,
  props: {
    anchor: {
      type: Object as PropType<ConsoleLinkParser>,
    },
    theme: {
      type: Object as PropType<ConsoleTheme>,
    },
    store: {
      type: Object as PropType<InstanceType<typeof LinkStore>>,
    },
  },
  setup(props, { slots }) {
    provideConsoleLinkParser(props)
    provideConsoleTheme()
    return () => slots.default()
  },
})

export default ConsoleProvider
