import { defineComponent } from "vue";
import ErrorSVG from '../../assets/error.svg'
import './style.css'

const ErrorIcon = defineComponent({
  name: 'ErrorIcon',
  props: {
    expand: Boolean
  },
  setup(props){
    return () => (
      <span class="su-console-error-icon">
        <ErrorSVG/>
      </span>
    )
  }
})

export default ErrorIcon