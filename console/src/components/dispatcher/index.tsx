import { type PropType, defineComponent, getCurrentInstance } from 'vue'
import ConsoleItem from '../console-item'
import ConsoleGroup from '../console-group'
import ConsoleTable from '../console-table'
import { isGroup } from '../../core/api'
import type { ConsoleItemValue } from '../../core/api'

const ConsoleDispatcher = defineComponent({
  name: 'ConsoleDispatcher',
  inheritAttrs: false,
  props: {
    item: Object as PropType<ConsoleItemValue>,
  },
  setup(props) {
    const key = getCurrentInstance().vnode.key
    const { item } = props
    return () => {
      if (isGroup(item)) {
        return (
          <ConsoleGroup
            key={key}
            data={item}
          />
        )
      }
      if (item.type === 'table') {
        return (
          <ConsoleTable
            key={key}
            data={item.data}
          />
        )
      }
      return (
        <ConsoleItem
          key={key}
          data={item.data}
          type={item.type}
          count={item.count}
        />
      )
    }
  },
})

export default ConsoleDispatcher
