import { computed, defineComponent, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useLinkRender } from '../../hooks'
import LocationConsole from '../console-location'
import type { ConsoleTypeBasic } from '../../definition'
import type { EncodeTypeResult } from '../../core/encode'
import './style.css'
import ConsoleBlock from '../../layouts/console-block'
import { DebugIcon, ErrorIcon, WarnIcon } from '../../icons'
import ConsoleBadge from '../console-badge'
import ConsoleContent from '../console-content'

const ConsoleItem = defineComponent({
  inheritAttrs: false,
  props: {
    data: {
      type: [Object, Array] as PropType<EncodeTypeResult | readonly EncodeTypeResult[]>,
      required: true,
    },
    count: {
      type: Number,
    },
    type: {
      type: String as PropType<ConsoleTypeBasic>,
    },
    noLocation: {
      type: Boolean,
    },
  },
  setup(props) {
    const { data, count, type, noLocation } = toRefs(props)
    const Anchor = useLinkRender()
    const location = computed(() =>
      noLocation
        ? undefined
        : (Array.isArray(data) ? data[0] : data)?.['@location'],
    )

    const RenderIcon = () => {
      if (count.value > 1)
        return <ConsoleBadge type={type.value} count={count.value} />

      switch (type.value) {
        case 'debug':
          return <DebugIcon />
        case 'error':
          return <ErrorIcon />
        case 'warn':
          return <WarnIcon />
        default:
          return null
      }
    }

    return () => (
      <ConsoleBlock type={type.value}>
        {{
          icon: RenderIcon,
          default: () => <ConsoleContent type={type.value} data={data.value} />,
          extra: () => <LocationConsole location={location.value} anchor={Anchor} />,
        }}
      </ConsoleBlock>
    )
  },
})

export default ConsoleItem
