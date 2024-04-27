import type { PropType } from 'vue';
import type { ConsoleItemData } from '../../definition';
declare const _default: import("vue").DefineComponent<{
    data: {
        type: PropType<ConsoleItemData>;
        required: true;
    };
    flat: BooleanConstructor;
    isLog: BooleanConstructor;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ConsoleItemData>;
        required: true;
    };
    flat: BooleanConstructor;
    isLog: BooleanConstructor;
}>>, {
    flat: boolean;
    isLog: boolean;
}, {}>;
export default _default;
