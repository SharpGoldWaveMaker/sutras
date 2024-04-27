import { defineComponent } from "vue";
import WarnSVG from '../../assets/warn.svg'
import './style.css'

const WarnIcon = defineComponent({
  name: 'WarnIcon',
  props: {
    expand: Boolean
  },
  setup(props){
    return () => (
      <span class="su-console-warn-icon">
        <WarnSVG/>
      </span>
    )
  }
})

export default WarnIcon