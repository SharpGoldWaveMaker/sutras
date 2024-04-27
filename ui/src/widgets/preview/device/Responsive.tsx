import { defineComponent, toRefs } from "vue";
import { ref, computed } from 'vue'
import { useElementSize } from '@vueuse/core'

const Responsive = defineComponent({
  name: 'Responsive',
  props: {
    width: Number,
    height: Number,
    disableScaling: Boolean
  },
  setup(props, { slots }){
    const {width, height, disableScaling} = toRefs(props)
    const target = ref(null) as any
    const size = useElementSize(target)
    const scale = computed(() => {
      if (disableScaling.value)
        return 'scale(1)'
      return `scale(${Math.min(size.width.value / width.value, size.height.value / height.value)})`
    })
    return () => (
      <div
        ref={target}
        style={{
          display: 'grid',
          height: '100%',
          width: '100%',
          placeItems: !disableScaling.value ? 'center' : 'unset',
          placeContent: !disableScaling.value ? 'center' : 'unset',
        }}
      >
        <div
          style={{
            width: disableScaling.value ? '100%' : `${width.value}px`,
            height: disableScaling.value ? '100%' : `${height.value}px`,
            transform: scale.value,
            transformOrigin: 'center center',
            overflow: 'hidden'
          }}
        >
          {
            slots.default?.({
              width: width.value, 
              height: height.value, 
              scale: scale.value
            })
          }
        </div>
      </div>
    )
  }
})

export default Responsive