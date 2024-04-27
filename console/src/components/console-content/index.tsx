import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import ConsoleValue from '../console-value'
import type { ConsoleTypeBasic } from '../../definition'
import type { EncodeResult, EncodeTypeResult } from '../../core/encode'
import ConsoleRow from '../../layouts/console-row'
import { classNames, useNamespace } from '@sgwm-sutras/style'
import './style.scss'

const ConsoleContent = defineComponent({
  name: 'ConsoleContent',
  inheritAttrs: false,
  props: {
    data: {
      type: [Object, Array] as PropType<EncodeResult | readonly EncodeResult[]>,
      required: true,
    },
    type: {
      type: String as PropType<ConsoleTypeBasic>,
    },
  },
  setup(props) {
    const { data, type } = props
    const ns = useNamespace('console-content')
    const className = classNames(ns.b(), ns.m(type))
    const RenderContent = () => {
      if (Array.isArray(data)) {
        return data.map((item, index) => (
          <ConsoleRow
            key={index}
          >
            <ConsoleValue
              data={item}
              isLog={type !== undefined}
            />
          </ConsoleRow>
        ))
      }
      return (
        <ConsoleRow>
          <ConsoleValue
            data={data as EncodeTypeResult}
            isLog={type !== undefined}
          />
        </ConsoleRow>
      )
    }
    return () => {
      return (
        <div class={className}>
          {RenderContent()}
        </div>
      )
    }
  },
})

export default ConsoleContent
