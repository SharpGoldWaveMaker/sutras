import { classNames, useNamespace } from "@sgwm-sutras/style";
import { DeviceTypeInjectKey } from "@sgwm-sutras/hooks";
import { computed, defineComponent, inject } from "vue";
import Responsive from '../device/Responsive'
import './style.scss'
import { DeviceRotateInjectKey } from "../context";
import { ReplMetaKey } from "@sgwm-sutras/hooks";

const PreviewDevice = defineComponent({
  name: 'PreviewDevice',
  setup(_, {slots}){
    const ns = useNamespace('preview-device')
    const deviceType = inject(DeviceTypeInjectKey)
      const deviceRotate = inject(DeviceRotateInjectKey)
      const meta = inject(ReplMetaKey)
      const deviceList = computed(() => meta.value.deviceList)
      const deviceSize = computed(() => {
        if(!deviceType.value){
          return {width: 0, height: 0}
        }
        const [width = 0, height = 0] = deviceList.value[deviceType.value] || []
        if(deviceRotate.value){
          return {
            width: height,
            height: width
          }
        }
        return {
            width,
            height
        }
      })
      const disabledScaling = computed(() => {
        const {width, height} = deviceSize.value
        return width === 0 && height === 0
      })
      const className =classNames(ns.b())
      return () => {
        return (
            <div
                class={className}
            >
                <Responsive
                    {...deviceSize.value}
                    disableScaling={disabledScaling.value}
                >
                    <div class={ns.e('content')}>
                        {slots.default?.()}
                    </div>
                </Responsive>
            </div>
        )
      }
  }
})

export default PreviewDevice