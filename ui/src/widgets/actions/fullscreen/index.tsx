import { defineComponent, inject } from "vue";
import Tooltip from 'ant-design-vue/es/tooltip'
import { ReplFullscreenKey, ReplFullscreenChangeKey } from '@sgwm-sutras/hooks';
import FullscreenExpand from '../../../assets/svg/fullscreen_expand.svg'
import FullscreenCollapse from '../../../assets/svg/fullscreen_collapse.svg'
import './style.css'

const FullscreenAction = defineComponent({
    name: 'FullscreenAction',
    setup(){
        const fullscreen = inject(ReplFullscreenKey)
        const setFullscreen = inject(ReplFullscreenChangeKey)
        return () => {
            if(fullscreen.value){
                return (
                    <Tooltip title="退出全屏">
                        <span class="su-fullscreen-action su-action" onClick={() => setFullscreen?.(false)}>
                            <FullscreenCollapse/>
                        </span>
                    </Tooltip>
                )
            }
            return (
                <Tooltip title="全屏查看">
                    <span class="su-fullscreen-action su-action" onClick={() => setFullscreen?.(true)}>
                        <FullscreenExpand/>
                    </span>
                </Tooltip>
            )
        }
    }
})

export default FullscreenAction