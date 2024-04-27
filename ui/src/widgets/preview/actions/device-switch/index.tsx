import { defineComponent, ref, type FunctionalComponent, inject, computed } from "vue";
import Responsive from '../../../../assets/svg/responsive.svg'
import ArrowDown from '../../../../assets/svg/arrow-down.svg'
import './style.scss'
import Dropdown from 'ant-design-vue/es/dropdown'
import Menu from 'ant-design-vue/es/menu'
import { DeviceTypeChangeInjectKey, DeviceTypeInjectKey, ReplFullscreenKey, ReplMetaKey } from "@sgwm-sutras/hooks";
import { classNames, useNamespace } from "@sgwm-sutras/style";

const MenuItem = Menu.Item
const DeviceSwitch = defineComponent({
    name: 'DeviceSwitch',
    setup(){
      const ns = useNamespace('device-switch')
      const container = ref() as any
      const deviceType = inject(DeviceTypeInjectKey)
      const setDeviceType = inject(DeviceTypeChangeInjectKey)
      const meta = inject(ReplMetaKey)
      const isFullscreen = inject(ReplFullscreenKey)
      const deviceTypes = computed(() => {
        return Object.keys(meta.value.deviceList || {})
      })
      const isActive = computed(() => {
        if(deviceType.value){
          const [width, height] = meta.value.deviceList[deviceType.value]
          return width !== 0 && height !== 0
        }
        return false
      })
      const className = computed(() => classNames(ns.b(), {
        [ns.m('active')]: isActive.value
      }))
      const RenderDefault: FunctionalComponent = () => {
          return (
              <div class={className.value}>
                  <div class={ns.e('icon')}>
                      <Responsive/>
                  </div>
                  <div class={ns.e('label')}>
                      {deviceType.value}
                  </div>
                  <div class={ns.e('icon')}>
                      <ArrowDown/>
                  </div>
              </div>
          )  
      }
      const RenderOverlay: FunctionalComponent = () => {
          return (
              <Menu onClick={({key}) => setDeviceType(key as string)}>
                  {
                      deviceTypes.value.map(device => (
                          <MenuItem key={device}>{device}</MenuItem>
                      ))
                  }
              </Menu>
          )
      }
      return () => {
        if(!deviceType.value){
          return null
        }
        return (
            <div ref={container}>
                <Dropdown 
                    getPopupContainer={() => isFullscreen.value ? container.value : document.body}
                    placement="bottomRight"
                >
                    {{
                        default: RenderDefault,
                        overlay: RenderOverlay
                    }}
                </Dropdown>
            </div>
        )
      }
    }
})

export default DeviceSwitch