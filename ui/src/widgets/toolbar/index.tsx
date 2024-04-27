import { defineComponent } from "vue";
import './style.css'

const Toolbar = defineComponent({
    name: 'Toolbar',
    setup(_, {slots}){
        return () => {
            return (
                <div class="toolbar">
                    {slots.default?.()}
                </div>
            )
        }
    }
})

export default Toolbar