import { defineComponent, ref } from 'vue'
import type { PropType } from 'vue'
import type { GroupData } from "../../core/api"
import Collapse from "../collapse"
import ConsoleItem from "../console-item"
import ConsoleTable from "../console-table"
import { usePaddingLeft } from '../../hooks'
import './style.css'
import { CollapseIcon } from '../../icons'
import ConsoleBlock from '../../layouts/console-block'
import ConsoleContent from '../console-content'

const ConsoleGroup =  defineComponent({
    name: 'ConsoleGroup',
    inheritAttrs: false,
    props: {
        data: {
          type: Object as PropType<GroupData>,
          required: true
        },
        paddingLeft: {
          type: Number
        }
    },
    setup(props, {slots}) {
        const { data } = props
        const paddingLeft = usePaddingLeft(props)
        const expand = ref(!data['@collapse'])
        const RenderSummary = () => {
          return (
            <ConsoleContent
              style={{fontWeight: 'bold'}}
              data={data['@key']}
              type="log"
            />
          )
        }
        const RenderDetail = () => {
          return data['@items'].map((item: any, index: number) => (
            ('@items' in item) ? (
                <ConsoleGroup
                    data={item}
                />
            ) : item.type === 'table' ? (
                <ConsoleTable
                    data={item.data}
                    style={{ paddingLeft: paddingLeft.value + 'px' }}
                />
            ) : (
                <ConsoleItem
                    data={item.data}
                    count={item.count}
                    type={item.type}
                    style={{ paddingLeft: paddingLeft.value + 'px' }}
                />
            )
          ))
        }
        return () => (
          <ConsoleBlock>
            {{
              icon: () => <CollapseIcon expand={expand.value} onClick={() => expand.value = !expand.value}/>,
              default: () => <Collapse
                class="su-console-group"
                show={expand.value}
                showIcon={false}
                class-detail="l0 line-throught"
                class-summary="svg-top"
                paddingLeft={paddingLeft.value}
              >
                {{
                  summary: RenderSummary,
                  content: RenderDetail,
                }}
              </Collapse>
            }}
          </ConsoleBlock>
        )
    }
})

export default ConsoleGroup
