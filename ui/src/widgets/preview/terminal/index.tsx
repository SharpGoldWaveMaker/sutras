import { defineComponent, inject, ref, Transition, watch } from "vue";
import Terminal from '../../../assets/svg/terminal.svg'
import PreviewLayout from "../layout";
import { ShowTerminialInjectKey } from "../context";
import { Console, ConsoleProvider } from '@sgwm-sutras/console'
import '@sgwm-sutras/console/style.css'
import './style.css'
import { ConsoleLinkStoreInjectKey, ConsoleAPIInjectKey } from "@sgwm-sutras/hooks";
import { useRepl } from '@sgwm-sutras/hooks';
import './style.css'
import Spin from 'ant-design-vue/es/spin'


const TerminalContent = defineComponent({
    name: 'TerminalContent',
    setup(){
        const consoleApi = inject(ConsoleAPIInjectKey)
        const linkStore = inject(ConsoleLinkStoreInjectKey)
        const displayValue = ref([...(consoleApi.values || [])])
        const loading = ref(false)
        watch(() => consoleApi.values, (newValue, oldValue) => {
          if (newValue.length === 0 && oldValue.length !== 0) {
            loading.value = true;
          } else if (newValue.length !== 0) {
            displayValue.value = newValue;
            loading.value = false;
          }
        }, { deep: true });
        return () => {
          const RenderContent = () => {
            if(displayValue.value.length){
              return (
                <Spin spinning={loading.value}>
                  <ConsoleProvider
                    store={linkStore.value}
                  >
                    <Console
                      data={displayValue.value}
                    />
                  </ConsoleProvider>
                </Spin>
              )
            }
            return <span style="font-style:italic;line-height:24px;font-size:12px;margin-left:18px;">(The console has no information to display)</span>
          }
          return (
            <Transition name="fade" mode="out-in">
              {RenderContent}
            </Transition>
          )
        }
    }
})

export const TerminalBox = defineComponent({
    name: 'TerminalBox',
    setup(){
        return () => {
            return (
                <PreviewLayout 
                    class="terminal-box"
                    compact={true}
                >
                    {{
                        left: () => [<Terminal class={"title-icon"}/>, 'Terminal'],
                        default: () => <TerminalContent/>
                    }}
                </PreviewLayout>
            )
        }
    }
})

export const TerminalDrawer = defineComponent({
    name: 'TerminalDrawer',
    setup(){
        const showTerminial = inject(ShowTerminialInjectKey)
        return () => {
            if(showTerminial.value){
                return (
                    <div class="terminal-drawer">
                        <TerminalBox/>
                    </div>
                )
            }
        }
    }
})

const PreviewTerminal = defineComponent({
  name: 'PreviewTerminal',
  setup(){
    const container = ref(null) as any
    useRepl({
      container,
      onError: () => {}
    })
    return () => [
      <div ref={container}/>,
      <TerminalBox/>
    ]
  }
})

export default PreviewTerminal