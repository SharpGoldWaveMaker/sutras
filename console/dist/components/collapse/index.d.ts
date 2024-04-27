import './style.scss';
declare const ConsoleCollapse: import("vue").DefineComponent<{
    onlyBtn: BooleanConstructor;
    disableMagic: BooleanConstructor;
    forceMagic: BooleanConstructor;
    paddingLeft: NumberConstructor;
    flat: BooleanConstructor;
    show: BooleanConstructor;
    classSummary: StringConstructor;
    classDetail: StringConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    onlyBtn: BooleanConstructor;
    disableMagic: BooleanConstructor;
    forceMagic: BooleanConstructor;
    paddingLeft: NumberConstructor;
    flat: BooleanConstructor;
    show: BooleanConstructor;
    classSummary: StringConstructor;
    classDetail: StringConstructor;
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    flat: boolean;
    onlyBtn: boolean;
    disableMagic: boolean;
    forceMagic: boolean;
    show: boolean;
    showIcon: boolean;
}, {}>;
export default ConsoleCollapse;
