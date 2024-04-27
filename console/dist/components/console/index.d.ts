import type { PropType } from 'vue';
import type { ConsoleItemValue } from '../../core/api';
declare const Console: import("vue").DefineComponent<{
    data: {
        type: PropType<ConsoleItemValue[]>;
        required: true;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<ConsoleItemValue[]>;
        required: true;
    };
}>>, {}, {}>;
export default Console;
