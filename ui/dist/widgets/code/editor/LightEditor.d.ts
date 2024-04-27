import { PropType } from 'vue';

declare const LightEditor: import('vue').DefineComponent<{
    value: StringConstructor;
    lang: StringConstructor;
    onChange: PropType<(value: string) => void>;
}, () => JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    value: StringConstructor;
    lang: StringConstructor;
    onChange: PropType<(value: string) => void>;
}>>, {}, {}>;
export default LightEditor;
