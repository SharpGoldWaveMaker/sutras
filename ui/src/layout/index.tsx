import { defineComponent, inject } from 'vue'
import { ReplFullscreenKey } from '@sgwm-sutras/hooks'
import FullLayout from './full'
import BlockLayout from './block'

const Layout = defineComponent({
  setup(_, { slots }) {
    const isFullscreen = inject(ReplFullscreenKey)
    const RenderLayout = () => {
      if (isFullscreen.value)
        return <FullLayout>{{ ...slots }}</FullLayout>
      return <BlockLayout>{{ ...slots }}</BlockLayout>
    }
    return () => {
      return (
        <div
          class={`layout ${isFullscreen.value ?? 'fullscreen'}`}
        >
          <RenderLayout />
        </div>
      )
    }
  },
})

export default Layout
