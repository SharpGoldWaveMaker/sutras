import { defineComponent } from "vue";
import { Preview } from './widgets/preview'
import {CodePanel} from "./widgets/code";

import {  useDemoProvider } from '@sgwm-sutras/hooks';
import type { MaybeElement } from '@vueuse/core'
import { ref } from 'vue'
import Layout from './layout'
import { TerminalBox } from "./widgets/preview/terminal";
import Toolbar from "./widgets/toolbar";
import CollapseAction from "./widgets/actions/collapse";
import FullscreenAction from "./widgets/actions/fullscreen";
import EditAction from "./widgets/actions/edit";

// 管理内容
const DemoBox = defineComponent({
    name: 'DemoBox',
    setup(_, {slots}){
        const container = ref<MaybeElement | null>(null) as any
        useDemoProvider(container)
        const RenderToolBar = () => {
            return (
                <Toolbar>
                    <CollapseAction/>
                    <FullscreenAction/>
                    <EditAction/>
                </Toolbar>
            )
        }
        return () => {
            return (
                <Layout 
                    ref={container}
                >
                    {{
                        header: slots.title,
                        meta: slots.description,
                        toolbar: RenderToolBar,
                        code: () => <CodePanel/>,
                        preview: () => <Preview/>,
                        terminal: () => <TerminalBox/>
                    }}
                </Layout>
            )
        }
    }
})

export default DemoBox