import { useNamespace } from '@sgwm-sutras/style'
import { defineComponent } from 'vue'
import './style.scss'

const PropName = defineComponent({
  name: 'PropName',
  inheritAttrs: false,
  props: {
    hidden: Boolean,
    name: String,
    preview: Boolean,
  },
  setup(props) {
    const ns = useNamespace('console-prop-name')
    return () => {
      const classNames = [
        ns.b(),
        props.hidden ? 'propHidden' : '',
        props.name.startsWith('[[') ? 'proto' : '',
        props.preview ? 'propPreview' : '',
      ].filter(Boolean).join(' ')
      return (
        <span
          class={classNames}
        >
          {props.name}
          <span class={ns.e('colon')}>:</span>
        </span>
      )
    }
  },
})

export default PropName
