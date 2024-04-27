import { defineComponent, toRefs, ref, type PropType, watch, inject } from "vue";
import './style.css'
import type { CodeRender } from './prepare'
import { createRender } from './prepare'
import { EditorReadyInjectKey } from "../panel/context";
import { ReplPattenKey } from "@sgwm-sutras/hooks";

const LightEditor = defineComponent({
    name: 'LightEditor',
    props: {
        value: String,
        lang: String,
        onChange: Function as PropType<(value: string) => void>
    },
    setup(props, {expose}){
        const {value} = toRefs(props)
        const html = ref('<pre></pre>')
        const render = ref<CodeRender | null>(null)
        const innerValue = ref(value.value)
        const pattern = inject(ReplPattenKey)
        const isReady = inject(EditorReadyInjectKey)
        
        const handleChange = e => {
            const valueNext = e.target.value
            innerValue.value = valueNext
            props.onChange?.(valueNext)
            renderCode(valueNext)
        }

        const renderCode = async (code: string) => {
            if(!render.value){
                render.value = await createRender()
            }
            html.value = render.value?.(code, props.lang || 'ts')
            !isReady.value && (isReady.value = true)
        }

        watch(() => pattern.value, patterNext => {
            if(patterNext === 'editable'){
                renderCode(value.value)
            }
        }, {immediate: true})

        watch(() => value.value, valueNext => {
          innerValue.value = valueNext
          if(pattern.value === 'editable'){
            renderCode(valueNext)
          }
        })

        return () => {
            return (
                <div class="code-editor">
                    { isReady.value && [
                        <span>
                            <div class="preview language-vue vp-adaptive-theme" v-html={html.value}/>
                        </span>,
                        <textarea
                            class="editor"
                            value={innerValue.value}
                            autocomplete="off" 
                            autocorrect="off" 
                            autocapitalize="off" 
                            spellcheck={false}
                            onInput={handleChange}
                        />
                    ]}
                </div>
            )
        }
    }
})

export default LightEditor