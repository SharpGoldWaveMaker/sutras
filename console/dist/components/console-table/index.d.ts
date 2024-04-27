import type { PropType } from 'vue';
import './style.scss';
import type { EncodeTableResult } from '../../core/encode';
declare const ConsoleTable: import("vue").DefineComponent<{
    data: {
        type: PropType<EncodeTableResult>;
        required: true;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<EncodeTableResult>;
        required: true;
    };
}>>, {}, {}>;
export default ConsoleTable;
