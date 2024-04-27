import { computed, defineComponent, inject, provide, ref, watch } from "vue";
import { ReplFilesInjectKey, ReplActiveFileKey, ReplActiveFileChangeKey, ReplSetSourceInjectKey, ReplPattenKey } from "@sgwm-sutras/hooks";
import { LightEditor } from "../editor";
import { find, langFromExtension } from '@sgwm-sutras/shared'
import FileTabs from "./tabs"; 
import CodePreviewer from "../preview";
import { EditorReadyInjectKey } from "./context";

function useActiveFile(){
    const files = inject(ReplFilesInjectKey)
    const activeIdentifier = inject(ReplActiveFileKey)
    const setActiveFile = inject(ReplActiveFileChangeKey)
    const setSource = inject(ReplSetSourceInjectKey)
    const activeFile = computed(() => find(files.value, {identifier: activeIdentifier.value}))
    const setActiveFileCode = (code: string) => {
        setSource(activeIdentifier.value, code)
    }
    return {
        files,
        activeFile,
        setActiveFile,
        setActiveFileCode,
    }
}

const CodePanel = defineComponent({
    name: 'CodePanel',
    setup(_, {slots}){
        const {
            files,
            activeFile,
            setActiveFile,
            setActiveFileCode,
        } = useActiveFile()
        const pattern = inject(ReplPattenKey)
        const editor = ref(null) as any
        const isEditorReady = ref(false)
        provide(EditorReadyInjectKey, isEditorReady)

        watch(pattern, patternNext => {
            if(patternNext === 'readPretty'){
                isEditorReady.value = false
            }
        }, {immediate: true})

        const shouldShowPreview = computed(() => {
            if(pattern.value === 'editable' && isEditorReady.value){
                return false
            } else {
                return true
            }
        })
        return () => {
            return (
                <div class={`code-panel${pattern.value === 'editable' ? ' edit' : ''}`}>
                    { files.value.length > 1 &&
                      <div class="header">
                        <FileTabs
                          files={files.value}
                          activeKey={activeFile.value.identifier}
                          onActiveChange={setActiveFile}
                        />
                      <div class="extra">
                          {slots.extra?.()}
                          </div>
                      </div>       
                    }
                    <div class="main">
                        <LightEditor
                            ref={editor}
                            value={activeFile.value.code}
                            lang={langFromExtension(activeFile.value.extension)}
                            onChange={setActiveFileCode}
                        />
                        { shouldShowPreview.value &&
                            <CodePreviewer 
                                identifier={activeFile.value.identifier}
                            />
                        }
                    </div>
                    <div class="footer">
                        
                    </div>
                </div>
            )
        }
    }
})


export default CodePanel