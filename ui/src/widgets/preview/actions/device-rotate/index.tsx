import { computed, defineComponent, inject } from "vue";
import DeviceRotateIcon from '../../../../assets/svg/device-rotate.svg'
import './style.scss'
import Tooltip from "ant-design-vue/es/tooltip";
import { DeviceRotateInjectKey } from "../../context";
import { DeviceTypeInjectKey, ReplMetaKey } from '@sgwm-sutras/hooks'
import { classNames, useNamespace } from "@sgwm-sutras/style";

const DeviceRotate = defineComponent({
    name: 'TerminialSwitch',
    setup(){
        const deviceRotate = inject(DeviceRotateInjectKey)
        const deviceType = inject(DeviceTypeInjectKey)
        const meta = inject(ReplMetaKey)
        const ns = useNamespace('device-rotate')
        const shouldShowRotate = computed(() => {
          if(!deviceType.value){
            return false
          }
          const [width, height] = meta.value.deviceList[deviceType.value]
          return width !== 0 && height !== 0
        })
        const className = computed(() => classNames(ns.b(), {
          [ns.m('active')]: deviceRotate.value
        }))
        return () => {
          if(!shouldShowRotate.value){
            return null
          }
          return (
            <div>
                <Tooltip title="旋转设备">
                  <div class={className.value} onClick={() => deviceRotate.value = !deviceRotate.value}>
                      <DeviceRotateIcon class={ns.e('icon')}/>
                  </div>
              </Tooltip>
            </div>
          )
        }
    }
})

export default DeviceRotate