import { computed, defineComponent, inject } from "vue";
import './style.scss'
import { useNamespace, classNames } from "@sgwm-sutras/style";
import { ReplMetaKey } from "@sgwm-sutras/hooks";

const PreviewLayout = defineComponent({
    name: 'PreviewLayout',
    props: {
        showHeader: {
          type: Boolean,
          default: true
        },
        compact: {
          type: Boolean,
          default: false
        }
    },
    setup(props, {slots}){
      const ns = useNamespace('preview-layout')
      const meta = inject(ReplMetaKey)
      const className = classNames(ns.b(), {
        [ns.m('with-extra')]: !!slots.extra,
        [ns.m('with-header')]: !!props.showHeader
      })
      const style = computed(() => {
        const previewHeight = meta.value.previewHeight
        if(previewHeight){
          return {
            height: typeof previewHeight === 'string' ? previewHeight : `${previewHeight}px`
          }
        }
      })
      return () => {
        return (
          <div class={className} style={style.value}>
            { props.showHeader && 
              <div class={ns.e('header')}>
                <div class={ns.e('header-left')}>
                  {slots.left?.()}
                </div>
                <div class={ns.e('header-center')}>
                  {slots.center?.()}
                </div>
                { slots.right &&
                  <div class={ns.e('header-right')}>
                      {slots.right?.()}
                  </div>
                }
              </div>
            }
            <div class={ns.e('main')}>
                {slots.default?.()}
            </div>
            {
              slots.extra && 
              <div class={ns.e('extra')}>
                {slots.extra?.()}
              </div>
            }
          </div>
        )
      }
    }
})

export default PreviewLayout
