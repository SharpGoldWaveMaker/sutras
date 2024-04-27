import { useNamespace } from '@sgwm-sutras/style'
import { defineComponent } from 'vue'
import './style.scss'

const BrowserDecorate = defineComponent({
  name: 'BrowserDecorate',
  setup(){
    const ns = useNamespace('browser-decorate')
    return () => <div class={ns.b()}/>
  }
})

export default BrowserDecorate
