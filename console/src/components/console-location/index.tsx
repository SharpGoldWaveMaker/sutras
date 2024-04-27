import { defineComponent } from 'vue'
// import { createAnchor } from '../createAnchor'
// import { useLinkRender } from '../../hooks'

const ConsoleLocation = defineComponent({
  name: 'ConsoleLocation',
  inheritAttrs: false,
  props: {
    location: String,
    Anchor: Object,
  },
  setup() {
    // const Anchor = useLinkRender()
    // return () => createAnchor(Anchor, {
    //   class: '',
    //   target: '_blank',
    //   href: props.location,
    //   text: props.location?.slice(props.location.lastIndexOf('/') + 1),
    // })
    return () => <div />
  },
})

export default ConsoleLocation
