import { defineComponent, inject } from "vue";
import Tooltip from 'ant-design-vue/es/tooltip'
import { ReplPattenKey, ReplPatternChangeKey, ReplCollapseChangeKey, ReplCollapseKey } from '@sgwm-sutras/hooks';
import EditFilled from '@ant-design/icons-vue/EditFilled'
import UndoOutlined from '@ant-design/icons-vue/UndoOutlined'

const EditAction = defineComponent({
    name: 'EditAction',
    setup(){
        const pattern = inject(ReplPattenKey)
        const collapse = inject(ReplCollapseKey)
        const setCollapse = inject(ReplCollapseChangeKey)
        const setPattern = inject(ReplPatternChangeKey)
        const handleEdit = () => {
            if(collapse.value){
                setCollapse?.(false)
            }
            setPattern?.('editable')
        }
        const handleCancel = () => {
            setPattern?.('readPretty')
        }
        return () => {
            if(pattern.value === 'readPretty'){
                return (
                    <Tooltip title="编辑">
                        <EditFilled
                            class="su-action"
                            onClick={handleEdit}
                        />
                    </Tooltip>
                )
            }
            return (
                <Tooltip title="取消">
                    <UndoOutlined
                        class="su-action"
                        onClick={handleCancel}
                    />
                </Tooltip>
            )
        }
    }
})

export default EditAction