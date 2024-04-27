import { defineComponent, inject, ref } from "vue";
import message from 'ant-design-vue/es/message'
import Tooltip from 'ant-design-vue/es/tooltip'
import { ReplCollapseKey, ReplFilesInjectKey, ReplActiveFileKey } from '@sgwm-sutras/hooks';
import { useClipboard } from '@vueuse/core'
import SnippetsOutlined from '@ant-design/icons-vue/SnippetsOutlined'

const CopyAction = defineComponent({
    name: 'CopyAction',
    setup(){
        const collapse = inject(ReplCollapseKey)
        const files = inject(ReplFilesInjectKey)
        const activeFileKey = inject(ReplActiveFileKey)
        const source = ref('file-code-copy')
        const {isSupported, copy} = useClipboard({source})
        async function handleCopy(){
            const activeFile = files?.value.find(f => f.identifier === activeFileKey?.value)
            if(activeFile){
                try {
                        await copy(activeFile.code)
                        message.success({
                            content: '已复制'
                        });
                } catch(err){
                        message.error({
                            content: '复制失败',
                        });
                }
            }
        } 
        if(!isSupported.value || collapse.value){
            return
        }
        return () => (
            <Tooltip title="复制代码">
                <SnippetsOutlined
                    class="code-box-code-action scale small"
                    key="copy"
                    onClick={handleCopy}
                />
            </Tooltip>
        )
    }
})

export default CopyAction