import { defineComponent, inject, computed, toRefs } from "vue";
import { ReplCodePreviewRendersKey, ReplCodeShowLangKey, ReplPattenKey} from '@sgwm-sutras/hooks'
import Spin from 'ant-design-vue/es/spin'
import { EditorReadyInjectKey } from "../panel/context";

const CodePreviewer = defineComponent({
    name: 'CodePreviewer',
    props: {
        identifier: String
    },
    setup(props){
        const {identifier} = toRefs(props)
        const renders = inject(ReplCodePreviewRendersKey)
        const showLang = inject(ReplCodeShowLangKey)
        const pattern = inject(ReplPattenKey)
        const isEditorReady = inject(EditorReadyInjectKey)
        const spinning = computed(() => {
            return pattern.value === 'editable' && !isEditorReady.value
        })
        const renderName = computed(() => {
            if(showLang?.value === 'js'){
                const tryName = `codejs-${identifier?.value}`
                if(renders[tryName]){
                    return tryName
                }
            }
            return `code-${identifier?.value}`
        })
        return () => {
            return (
                <Spin
                    style={{fontSize: 'inherit'}}
                    spinning={spinning.value}
                >
                    { renders[renderName.value]?.() }
                </Spin>
            )
        }
    }
})

export default CodePreviewer