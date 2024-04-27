import { useNamespace } from '@sgwm-sutras/style'
import { defineComponent } from 'vue'
import './style.scss'

const ConsoleRow = defineComponent({
  name: 'ConsoleRow',
  setup(_, { slots }) {
    const ns = useNamespace('console-row')
    return () => (
      <div class={ns.b()}>
        {slots.default?.()}
      </div>
    )
  },
})

export default ConsoleRow
