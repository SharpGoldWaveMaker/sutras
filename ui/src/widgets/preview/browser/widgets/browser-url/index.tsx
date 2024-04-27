import { useNamespace } from '@sgwm-sutras/style'
import { defineComponent } from 'vue'
import './style.scss'

const BrowserURL = defineComponent({
  name: 'BrowserDecorate',
  setup(){
    const ns = useNamespace('browser-url')
    return () => <div class={ns.b()}/>
  }
})

export default BrowserURL
