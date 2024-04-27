import { useNamespace } from '@sgwm-sutras/style'
import { type FunctionalComponent, defineComponent, ref, toRefs, watch } from 'vue'
import { CollapseIcon } from '../../icons'
import './style.scss'

const ConsoleCollapse = defineComponent({
  name: 'ConsoleCollapse',
  inheritAttrs: false,
  props: {
    onlyBtn: Boolean,
    disableMagic: Boolean,
    forceMagic: Boolean,
    paddingLeft: Number,
    flat: Boolean,
    show: Boolean,
    classSummary: String,
    classDetail: String,
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const ns = useNamespace('console-collapse')
    const { show } = toRefs(props)
    const state = ref(props.show)
    const loaded = ref(state.value)

    watch(show, (showNext) => {
      state.value = showNext
    })

    if (!state.value) {
      const watcher = watch(state, () => {
        loaded.value = true
        watcher()
      })
    }

    function handleClick(e: MouseEvent) {
      state.value = !state.value
      e.stopPropagation()
    }

    const RenderIcon: FunctionalComponent = () => {
      if (props.showIcon) {
        return (
          <div class={ns.e('icon')}>
            <CollapseIcon expand={state.value} />
          </div>
        )
      }
    }

    const RenderSummary: FunctionalComponent = () => {
      if (slots.summary)
        return slots.summary()

      let Content
      if (props.forceMagic) {
        Content = slots['summary-opened']?.()
      }
      else {
        if (props.disableMagic || (!slots['summary-opened'] || !state.value))
          Content = slots.default?.()

        else
          Content = slots['summary-opened']?.()
      }
      return (
        <div class={ns.e('summary')}>
          { Content }
        </div>
      )
    }
    const RenderDetail: FunctionalComponent = () => {
      if (state.value || loaded.value) {
        return (
          <div
            v-show={state.value}
            class={['collapse-detail', props.classDetail]}
            style={{ '--p-left': props.paddingLeft ? `${props.paddingLeft}px` : undefined }}
          >
            {slots.content?.({ state: state.value })}
          </div>
        )
      }
    }
    return () => {
      if (props.onlyBtn)
        return slots.default?.()

      if (props.flat)
        return slots.content?.()

      return (
        <div class={ns.b()}>
          <div class={ns.e('preview')} onClick={handleClick}>
            <RenderIcon />
            <RenderSummary />
          </div>
          <RenderDetail />
        </div>
      )
    }
  },
})

export default ConsoleCollapse
