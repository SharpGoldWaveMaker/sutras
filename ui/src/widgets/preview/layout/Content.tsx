import { classNames, useNamespace } from "@sgwm-sutras/style";
import { defineComponent, inject, computed } from "vue";
import { ReplMetaKey } from "@sgwm-sutras/hooks";

const PreviewContent = defineComponent({
  name: 'PreviewContent',
  setup(_, {slots}){
    const ns = useNamespace('preview-content')
    const meta = inject(ReplMetaKey)
    const style = computed(() => ({
      background: meta?.value?.background,
    }))
    const className = computed(() => classNames(ns.b(), {
      [meta.value.style]: !!meta.value.style,
      [ns.m('compact')]: meta.value.style?.includes('compact')
    }))
    return () => (
      <div class={className.value} style={style.value}>
        {slots.default?.()}
      </div>
    )
  }
})

export default PreviewContent