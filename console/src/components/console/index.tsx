import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ConsoleItemValue } from '../../core/api'
import ConsoleWrapper from '../../layouts/console-wrapper'
import ConsoleDispatcher from '../dispatcher'

const Console = defineComponent({
  name: 'Console',
  inheritAttrs: false,
  props: {
    data: {
      type: Array as PropType<ConsoleItemValue[]>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <ConsoleWrapper>
        {props.data.map((item, index) => (<ConsoleDispatcher item={item} key={index} />))}
      </ConsoleWrapper>
    )
  },
})

export default Console
