import { defineComponent } from "vue";
import DebugSVG from '../../assets/debug.svg'
import './style.css'

const DebugIcon = defineComponent({
  name: 'DebugIcon',
  props: {
    expand: Boolean
  },
  setup(props){
    return () => (
      <span class="su-console-debug-icon">
        <DebugSVG/>
      </span>
    )
  }
})

export default DebugIcon