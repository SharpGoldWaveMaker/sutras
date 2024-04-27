import { defineComponent, ref, shallowRef, watch } from "vue";
import type { PropType } from "vue";
import ConsoleValue from "../console-value";
import type { EncodeTypeResult } from "../../core/encode";
import type { DLink } from "../../definition";
import { useConsoleLinkParser } from "../../hooks";
import './style.css'

const GetterField = defineComponent({
  name: 'GetterField',
  inheritAttrs: false,
  props: {
    getter: Object as PropType<DLink>,
  },
  setup(props) {
    const getted = ref(false);
    const value = shallowRef<EncodeTypeResult>();
    const {callFnLinkAsync} = useConsoleLinkParser()

    watch(getted, () => {
      getted.value = true;

      callFnLinkAsync(props.getter)
        .then((response) => {
          value.value = response;
        });
    });
    return () => {
        if(!getted.value || !value.value){
            return (<span onClick={() => (getted.value = true)}>(…)</span>)
        }
        return (
            <ConsoleValue
              data={value.value!}
              class="inline !ml-0"
            />
        )
    }
  }
});

export default GetterField;
