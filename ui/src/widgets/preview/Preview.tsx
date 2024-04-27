import { defineComponent, inject, provide, ref } from "vue";
import PreviewBrowser from "./browser";
import { ShowTerminialInjectKey, DeviceRotateInjectKey } from "./context";
import { TerminalDrawer } from "./terminal";
import PreviewBlock from "./block";
import PreviewTerminal from './terminal'
import { PreviewModeInjectKey } from "@sgwm-sutras/hooks";

const Preview = defineComponent({
    name: 'Preview',
    setup(){
        const showTerminial = ref(false)
        const deviceRotate = ref(false)
        const previewMode = inject(PreviewModeInjectKey)
        provide(ShowTerminialInjectKey, showTerminial)
        provide(DeviceRotateInjectKey, deviceRotate)
        return () => {
          if(previewMode.value === 'terminal'){
            return <PreviewTerminal/>
          }
          if(previewMode.value === 'browser'){
              return [
                  <PreviewBrowser/>,
                  <TerminalDrawer/>
              ]
          }
          return <PreviewBlock/>
        }
    }
})

export default Preview