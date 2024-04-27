import { useNamespace } from '@sgwm-sutras/style'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { ConsoleTypeBasic } from '../../definition'
import './style.scss'

const ConsoleBadge = defineComponent({
  name: 'ConsoleBadge',
  inheritAttrs: false,
  props: {
    count: Number,
    type: String as PropType<ConsoleTypeBasic>,
  },
  setup(props) {
    const ns = useNamespace('console-badge')
    const classNames = [
      ns.b(),
      ns.m(props.type),
    ].join(' ')
    return () => (
      <div class={classNames}>
        {props.count}
      </div>
    )
  },
})

export default ConsoleBadge
