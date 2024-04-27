import { defineComponent, computed, inject } from 'vue';
import Tooltip from 'ant-design-vue/es/tooltip'
import { ReplCollapseKey, ReplCollapseChangeKey, ReplPageDataInjectKey } from '@sgwm-sutras/hooks';
import './style.css'

const CollapseAction = defineComponent({
    name: 'CollapseAction',
    setup(){
        const pageData = inject(ReplPageDataInjectKey)
        const collapse = inject(ReplCollapseKey)
        const setCollapse = inject(ReplCollapseChangeKey)
        const isDark = computed(() => pageData?.isDark.value)
        return () => {
            return (
                <Tooltip title={collapse.value ? '展开代码' : '收起代码'}>
                    <span 
                        class="su-collapse-action su-action"
                    >
                        <img
                            alt="expand code"
                            src={
                                isDark.value
                                ? 'https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg'
                                : 'https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg'}
                            class={!collapse.value ? 'hide' : 'show'}
                            onClick={() => setCollapse(!collapse.value)}
                        />
                        <img
                            alt="collapse code"
                            src={
                                isDark.value
                                ? 'https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg'
                                : 'https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg'
                            }
                            class={!collapse.value ? 'show' : 'hide'}
                            onClick={() => setCollapse(!collapse.value)}
                        />
                    </span>
                </Tooltip>
            )
        }
    }
})

export default CollapseAction