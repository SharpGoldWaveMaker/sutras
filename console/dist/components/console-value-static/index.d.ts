import type { PropType } from 'vue';
import './style.scss';
import type { ConsoleItemData } from "../../definition";
declare const ConsoleValueStatic: import("vue").DefineComponent<{
    data: {
        type: PropType<ConsoleItemData>;
        required: true;
    };
    hideNameObject: BooleanConstructor;
    full: BooleanConstructor;
    isLog: BooleanConstructor;
    first: BooleanConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ConsoleItemData>;
        required: true;
    };
    hideNameObject: BooleanConstructor;
    full: BooleanConstructor;
    isLog: BooleanConstructor;
    first: BooleanConstructor;
}>>, {
    first: boolean;
    hideNameObject: boolean;
    full: boolean;
    isLog: boolean;
}, {}>;
export default ConsoleValueStatic;
