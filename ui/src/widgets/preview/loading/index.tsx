import { defineComponent, inject } from "vue";
import { PreviewLoadingInjectKey } from "../context";
import Spin from 'ant-design-vue/es/spin'
import { useNamespace } from "@sgwm-sutras/style";
import './style.scss'

const PreviewLoading = defineComponent({
  name: 'PreviewLoading',
  setup(){
    const ns = useNamespace('preview-loading')
    const loading = inject(PreviewLoadingInjectKey)
    return () => {
      return (
        <Spin class={ns.b()} spinning={loading.value}/>
      )
    }
  }
})

export default PreviewLoading