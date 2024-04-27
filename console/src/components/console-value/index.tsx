import { useNamespace } from '@sgwm-sutras/style'
import type { FunctionalComponent, PropType } from 'vue'
import { defineComponent } from 'vue'
import type {
  EncodeTypeResult,
} from '../../core/encode'
import { useValueRender } from '../../hooks'
import './style.scss'

const ConsoleValue = defineComponent({
  name: 'ConsoleValue',
  inheritAttrs: false,
  props: {
    data: {
      type: Object as PropType<EncodeTypeResult>,
      required: true,
    },
    hideNameObject: Boolean,
    flat: Boolean,
    isLog: Boolean,
  },
  setup(props, { slots, attrs }) {
    const ns = useNamespace('console-value')
    return () => {
      const Component: FunctionalComponent = useValueRender(props.data)
      return (
        <div class={ns.b()}>
          <Component {...attrs} {...props}>{{ ...slots }}</Component>
        </div>
      )
    }
  },
})

export default ConsoleValue
