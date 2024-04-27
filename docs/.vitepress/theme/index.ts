import Theme from 'vitepress/theme'
import './style/main.css'
import './style/var.css'
import '@sgwm-sutras/ui/dist/style.css'
import { DemoBox } from '@sgwm-sutras/ui'
import Layout from '../components/Layout.vue'

export default {
  extends: Theme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('demo', DemoBox)
  },
}
