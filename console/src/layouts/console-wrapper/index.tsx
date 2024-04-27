import { defineComponent } from 'vue'
import { useNamespace } from '@sgwm-sutras/style'
import './style.scss'

const ConsoleWrapper = defineComponent({
  name: 'ConsoleWrapper',
  setup(_, { slots }) {
    const ns = useNamespace('console-wrapper')
    return () => (
      <div class={ns.b()}>
        {slots.default?.()}
      </div>
    )
  },
})

export default ConsoleWrapper
