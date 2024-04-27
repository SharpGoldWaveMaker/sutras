import { defineComponent, type FunctionalComponent, type PropType, ref, computed } from "vue";
import type { File } from '@sgwm-sutras/shared'
import './style.css'
import ArrowLeft from '../../../assets/svg/arrow-left.svg'
import ArrowRight from '../../../assets/svg/arrow-right.svg'

const FileTabs = defineComponent({
    name: 'FileTabs',
    props: {
        files: Array as PropType<File[]>,
        activeKey: String,
        onActiveChange: Function as PropType<(key: string) => void>
    },
    setup(props){
        const container = ref(null) as any
        const isOverflow = computed(() => container.value ? container.value.scrollWidth > container.value.clientWidth : false)
        const scrollLeft = () => {
            if (container.value) {
                container.value.scrollLeft -= 50; // 向左滚动50px
            }
        };
          
        const scrollRight = () => {
            if (container.value) {
                container.value.scrollLeft += 50; // 向右滚动50px
            }
        };
        const RenderTabs: FunctionalComponent = () => {
            return props.files.map(file => (
                <div 
                    class={`tab${props.activeKey === file.identifier ? ' active' : ''}`}
                    onClick={() => props.onActiveChange(file.identifier)}
                >
                    {/* {file.filename}{file.extension} */}
                    {file.pathFromEntry === '.' ? `${file.filename}${file.extension}` : file.pathFromEntry}
                </div>
            ))
        }
        return () => {
            return (
                <div class="file-tabs">
                    { isOverflow.value && 
                        <div class="tab action" onClick={scrollLeft}>
                            <ArrowLeft class="icon"/>
                        </div>
                    }
                    <div class="content" ref={container}>
                        <RenderTabs/>
                    </div>
                    { isOverflow.value && 
                        <div class="tab action" onClick={scrollRight}>
                            <ArrowRight class="icon"/>
                        </div>
                    }
                </div>
            )
        }
    }
})

export default FileTabs