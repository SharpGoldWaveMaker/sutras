import { defineComponent, inject } from "vue";
import { ErrorMessageInjectKey, ShowTerminialInjectKey } from "../context";
import Alert from 'ant-design-vue/es/alert'
import Button from 'ant-design-vue/es/button'
import { useNamespace } from "@sgwm-sutras/style";
import './style.scss'

const PreviewError = defineComponent({
  name: 'PreviewError',
  setup(){
    const ns = useNamespace('preview-error')
    const errorMessage = inject(ErrorMessageInjectKey)
    const showTerminial = inject(ShowTerminialInjectKey)
    return () => {
      if(!errorMessage.value){
        return null
      }
      return (
        <div class={ns.b()}>
          <Alert type="error" banner message={errorMessage.value}>
            {{action: () => <Button size="small" type="link" onClick={() => showTerminial.value = true}>查看终端</Button>}}
          </Alert>
        </div> 
      )
    }
  }
})

export default PreviewError