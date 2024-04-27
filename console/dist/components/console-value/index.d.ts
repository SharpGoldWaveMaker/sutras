import type { PropType } from 'vue';
import type { EncodeTypeResult } from '../../core/encode';
import './style.scss';
declare const ConsoleValue: import("vue").DefineComponent<{
    data: {
        type: PropType<EncodeTypeResult>;
        required: true;
    };
    hideNameObject: BooleanConstructor;
    flat: BooleanConstructor;
    isLog: BooleanConstructor;
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<EncodeTypeResult>;
        required: true;
    };
    hideNameObject: BooleanConstructor;
    flat: BooleanConstructor;
    isLog: BooleanConstructor;
}>>, {
    flat: boolean;
    hideNameObject: boolean;
    isLog: boolean;
}, {}>;
export default ConsoleValue;
