import type { PropType } from 'vue';
import type { ConsoleItemData } from '../definition';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    data: {
        type: PropType<ConsoleItemData>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ConsoleItemData>;
        required: true;
    };
}>>, {}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
