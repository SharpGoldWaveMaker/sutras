import type { PropType } from 'vue';
import type { GroupData } from "../../core/api";
import './style.css';
declare const ConsoleGroup: import("vue").DefineComponent<{
    data: {
        type: PropType<GroupData>;
        required: true;
    };
    paddingLeft: {
        type: NumberConstructor;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: PropType<GroupData>;
        required: true;
    };
    paddingLeft: {
        type: NumberConstructor;
    };
}>>, {}, {}>;
export default ConsoleGroup;
