import type { PropType } from 'vue';
import type { ConsoleTypeBasic } from '../../definition';
import type { EncodeResult } from '../../core/encode';
import './style.scss';
declare const ConsoleContent: import("vue").DefineComponent<{
    data: {
        type: PropType<EncodeResult | readonly EncodeResult[]>;
        required: true;
    };
    type: {
        type: PropType<ConsoleTypeBasic>;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<EncodeResult | readonly EncodeResult[]>;
        required: true;
    };
    type: {
        type: PropType<ConsoleTypeBasic>;
    };
}>>, {}, {}>;
export default ConsoleContent;
