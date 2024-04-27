import { computed, defineComponent, inject } from 'vue'
import { ReplCollapseKey } from '@sgwm-sutras/hooks'
import './style.scss'
import { useNamespace } from '@sgwm-sutras/style'

const BlockLayout = defineComponent({
  name: 'BlockLayout',
  setup(_, { slots }) {
    const collapse = inject(ReplCollapseKey)
    const ns = useNamespace('block-layout')
    const showCode = computed(() => !collapse.value )
    return () => {
      return (
        <div class={ns.b()}>
          {slots.header?.()}
          <div class={ns.e()}>
            {slots.preview?.()}
            {slots.meta?.()}
            <div class={ns.e('toolbar')}>
              {slots.toolbar?.()}
            </div>
            { showCode.value && slots.code?.()}
          </div>
        </div>
      )
    }
  },
})

export default BlockLayout
