import type { PropType } from 'vue';
import type { ConsoleTypeBasic } from '../../definition';
import type { EncodeTypeResult } from '../../core/encode';
import './style.css';
declare const ConsoleItem: import("vue").DefineComponent<{
    data: {
        type: PropType<EncodeTypeResult | readonly EncodeTypeResult[]>;
        required: true;
    };
    count: {
        type: NumberConstructor;
    };
    type: {
        type: PropType<ConsoleTypeBasic>;
    };
    noLocation: {
        type: BooleanConstructor;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<EncodeTypeResult | readonly EncodeTypeResult[]>;
        required: true;
    };
    count: {
        type: NumberConstructor;
    };
    type: {
        type: PropType<ConsoleTypeBasic>;
    };
    noLocation: {
        type: BooleanConstructor;
    };
}>>, {
    noLocation: boolean;
}, {}>;
export default ConsoleItem;
