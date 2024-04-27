import { defineComponent, inject } from "vue";
import './style.css'
import 'splitpanes/dist/splitpanes.css'
import { Splitpanes, Pane } from 'splitpanes'
import { PreviewModeInjectKey } from "@sgwm-sutras/hooks";

const FullLayout = defineComponent({
    name: 'FullLayout',
    setup(_, {slots}){
      const previewMode = inject(PreviewModeInjectKey)
      return () => {
        return (
          <div class="full-wrapper">
            <div class="header">
              {slots.header?.()}
              {slots.meta?.()}
              {slots.toolbar?.()}
            </div>
            <div class="main">
              <Splitpanes class="default-theme">
                <Pane>
                  <Splitpanes horizontal class="default-theme">
                    <Pane>
                      {slots.preview?.()}
                    </Pane>
                    { previewMode.value === 'browser' && (
                        <Pane>
                          {slots.terminal?.()}
                        </Pane>
                      )
                    }
                  </Splitpanes>
                </Pane>
                <Pane>
                    {slots.code?.()}
                </Pane>
              </Splitpanes>
            </div>
          </div> 
        )
      }
    }
})

export default FullLayout