import { type PropType, defineComponent } from 'vue'
import { useNamespace } from '@sgwm-sutras/style'
import './style.scss'
import { provideConsoleIndentLevel } from '../../hooks'
import type { ConsoleTypeBasic } from '../../definition'

const ConsoleBlock = defineComponent({
  name: 'ConsoleBlock',
  inheritAttrs: false,
  props: {
    type: String as PropType<ConsoleTypeBasic>,
  },
  setup(props, { slots }) {
    const ns = useNamespace('console-block')
    const { level } = provideConsoleIndentLevel()
    return () => {
      return (
        <div class={`${ns.b()} ${ns.m(props.type)}`}>
          { (level === 0 || slots.icon)
          && (
            <div class={ns.e('icon')}>
              {slots.icon?.()}
            </div>
          )}
          <div class={ns.e('main')}>
            {slots.default?.()}
            <div class={ns.e('extra')}>
              {slots.extra?.()}
            </div>
          </div>
        </div>
      )
    }
  },
})

export default ConsoleBlock
