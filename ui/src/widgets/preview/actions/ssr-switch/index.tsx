import { defineComponent, inject } from "vue";
import Switch from "ant-design-vue/es/switch";
import {SSRModeInjectKey, SSRModeChangeInjectKey} from '@sgwm-sutras/hooks'

const SSRSwitch = defineComponent({
    name: 'SSR',
    setup(){
        const ssrMode = inject(SSRModeInjectKey)
        const setSSRMode = inject(SSRModeChangeInjectKey)
        return () => {
            return (
              <div class="browser-ssr">
                <Switch
                    size="small"
                    checked={ssrMode.value === 'server'}
                    checked-children="SSR" 
                    un-checked-children="CSR" 
                    onChange={checked => setSSRMode(checked ? 'server' : 'client')}
                />
              </div>
            )
        }
    }
})

export default SSRSwitch