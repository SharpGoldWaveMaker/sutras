import { ReplFullscreenKey } from "@sgwm-sutras/hooks";
import { computed, defineComponent, inject } from "vue";
import Terminal from '../../../../assets/svg/terminal.svg'
import './style.scss'
import Tooltip from "ant-design-vue/es/tooltip";
import { ShowTerminialInjectKey } from "../../context";
import { classNames, useNamespace } from "@sgwm-sutras/style";

const TerminialSwitch = defineComponent({
    name: 'TerminialSwitch',
    setup(){
        const isFullscreen = inject(ReplFullscreenKey)
        const showTerminial = inject(ShowTerminialInjectKey)
        const ns = useNamespace('terminal-switch')
        if(isFullscreen?.value){
            return
        }
        const className = computed(() => classNames(ns.b(), {
          [ns.m('active')]: showTerminial.value
        }))
        return () => {
            return (
                <div>
                  <Tooltip title="查看终端">
                    <div class={className.value} onClick={() => showTerminial.value = !showTerminial.value}>
                        <Terminal class="icon"/>
                    </div>
                  </Tooltip>
                </div>
            )
        }
    }
})

export default TerminialSwitch