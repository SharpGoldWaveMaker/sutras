import { defineComponent, inject, computed, ref, provide} from "vue";
import { ReplFullscreenKey, ReplMetaKey, useRepl } from '@sgwm-sutras/hooks';
import PreviewLayout  from "../layout";
import DeviceSwitch from "../actions/device-switch";
import SSRSwitch from "../actions/ssr-switch";
import PreviewDevice from "../device";
import TerminialSwitch from "../actions/terminal-switch";
import DeviceRotate from "../actions/device-rotate";
import BrowserDecorate from "./widgets/browser-decorate";
import BrowserURL from "./widgets/browser-url";
import PreviewContent from "../layout/Content";
import { ErrorMessageInjectKey, PreviewLoadingInjectKey } from "../context";
import PreviewLoading from "../loading";
import PreviewError from "../error";

const PreviewBrowser = defineComponent({
    name: 'PreviewBrowser',
    setup(){
        const container = ref(null) as any
        const meta = inject(ReplMetaKey)
        const errorMessage = ref('')
        function onError(message: string){
          errorMessage.value = message
        }
        const {loading: uLoading, initializing} = useRepl({
          container,
          onError
        })
        const isFullscreen = inject(ReplFullscreenKey)
        const loading = computed(() => uLoading.value || initializing.value)
        provide(PreviewLoadingInjectKey, loading)
        provide(ErrorMessageInjectKey, errorMessage)
        const shouldRenderSSRSwitch = computed(() => {
          const endableSSR = meta.value.enableSSR
          if(typeof endableSSR === 'string'){
            return endableSSR === 'both'
          }
          return !!endableSSR
        })
        const RenderMain = () => [
          <PreviewDevice>
            <PreviewContent>
              <div style={{height: '100%'}} ref={container}/>
            </PreviewContent>
          </PreviewDevice>,
          <PreviewLoading/>,
          <PreviewError/>
        ]
        const RenderBrowserTools = () => {
            const tools = [
              shouldRenderSSRSwitch.value && <SSRSwitch/>,
              <DeviceSwitch/>,
              <DeviceRotate/>
            ]
            if(!isFullscreen.value){
                tools.push(
                  <TerminialSwitch/>
                )
            }
            return tools
        }
        return () => {
            return (
                <PreviewLayout
                    compact={true}
                >
                    {{
                        left: () => <BrowserDecorate/>,
                        right: RenderBrowserTools,
                        center: () => <BrowserURL/>,
                        default: RenderMain
                    }}
                </PreviewLayout>   
            )
        }
    }
})

export default PreviewBrowser