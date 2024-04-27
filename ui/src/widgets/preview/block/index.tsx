import { defineComponent, inject } from "vue";
import { ReplCodePreviewRendersKey, ReplMetaKey } from '@sgwm-sutras/hooks'
import './style.css'
import PreviewLayout from "../layout";
import PreviewDevice from "../device";
import DeviceSwitch from "../actions/device-switch";
import DeviceRotate from "../actions/device-rotate";
import PreviewContent from "../layout/Content";

const PreviewBlock = defineComponent({
    name: 'PreviewBlock',
    setup(){
        const meta = inject(ReplMetaKey)
        const renders = inject(ReplCodePreviewRendersKey)
        const RenderExtra = () => {
          return [
            <DeviceSwitch/>,
            <DeviceRotate/>
          ]
        }
        return () => {
            return (
                <PreviewLayout 
                    class="preview-block"
                    compact={meta.value.style?.indexOf('compact') > -1}
                    showHeader={false}
                >
                  {{
                    extra: RenderExtra,
                    default: () => (
                      <PreviewDevice>
                        <PreviewContent>
                          {renders.default?.()}
                        </PreviewContent>
                      </PreviewDevice>
                    )
                  }}
                </PreviewLayout>
            )
        }
    }
})

export default PreviewBlock