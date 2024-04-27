import { defineComponent } from "vue";
import type { PropType } from 'vue'
import DownSVG from '../../assets/down.svg'
import RightSVG from '../../assets/right.svg'
import './style.css'

const CollapseIcon = defineComponent({
  name: 'CollapseIcon',
  props: {
    expand: Boolean,
    onClick: Function as PropType<() => void>
  },
  setup(props){
    return () => (
      <span class="su-console-collapse-icon" onClick={props.onClick}>
        {props.expand ? <DownSVG/> : <RightSVG/>}
      </span>
    )
  }
})

export default CollapseIcon