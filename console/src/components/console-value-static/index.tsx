import { defineComponent, h } from "vue";
import type { FunctionalComponent, PropType } from 'vue'
import { useLinkRender } from "../../hooks";
import { parseLink } from "../parseLink"
import './style.scss'
import type { ConsoleItemData } from "../../definition";
import { RenderArrayName } from "../../renders";
import { useNamespace } from "@sgwm-sutras/style";

const ConsoleValueStatic = defineComponent({
  name: 'ConsoleValueStatic',
  inheritAttrs: false,
  props: {
    data: {
      type: [String, Number, Object, Array, Symbol, Function] as PropType<ConsoleItemData>,
      required: true
    },
    hideNameObject: Boolean,
    full: Boolean,
    isLog: Boolean,
    first: Boolean
  },
  setup(props) {
    const ns = useNamespace('console-value-static')
    const {data, hideNameObject, full, isLog, first} = props
    const Anchor = useLinkRender()
    const RenderString: FunctionalComponent = () => {
        let Content
        if(first){
            Content = h('span', parseLink(data['@value'], {
              classes: 'color-white',
              component: Anchor
            }))
        } else if(full) {
            Content = `"${data["@value"].replace(/"/g, '\\"').replace(/\\n/g, "\\\n")}"`
        } else {
            Content = `'${data["@value"].replace(/'/g, "\\'").replace(/\\n/g, "\\\n")}'`
        }
        return (
            <span class={isLog ? undefined : 'string'}>
              { Content }
            </span>
        )
    }

    const RenderObject: FunctionalComponent = () => {
        const renders = []
        if(!hideNameObject){
            renders.push(
                data["@name"]
            )
        }
        renders.push('{...}')
        return renders
    }
    const RenderValue = () => {
      const type = data["@t"]
        switch(type){
            case 'string':
                return <RenderString/>;
            case 'number':
            case 'bint':
            case 'symbol':
            case 'nill':
                return (<span class={ns.e(type)}>{data["@value"]}</span>)
            case 'object':
                return <RenderObject/>
            case 'error':
                return data["@stack"]
            case 'regexp':
                return (<span class={type}>{data["@name"]}</span>)
            case 'collection':
            case 'array':
            case 'typedarray':
            case 'buffer':
            case 'dataview':
                return <RenderArrayName data={data}/>
            case 'function':
                return 'ƒ'
            case 'element':
                return (
                    <span class="element-tag">
                        {data["@name"].toLowerCase().replace(/^#/, "")}
                    </span>
                )
            case 'promise':
                return 'Promise'
            case 'date':
                return data["@value"]
            case 'gs':
                return '(…)'
            default:
                return 'nothing'
        }
    }
    return () => (
      <span class={ns.b()}>
        {RenderValue()}
      </span>
    )
  },
});

export default ConsoleValueStatic;
