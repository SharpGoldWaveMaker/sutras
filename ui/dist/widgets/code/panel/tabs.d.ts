import { File } from '../../../../shared/dist/index.d.mts';
import { PropType } from 'vue';

declare const FileTabs: import('vue').DefineComponent<{
    files: PropType<File[]>;
    activeKey: StringConstructor;
    onActiveChange: PropType<(key: string) => void>;
}, () => JSX.Element, unknown, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    files: PropType<File[]>;
    activeKey: StringConstructor;
    onActiveChange: PropType<(key: string) => void>;
}>>, {}, {}>;
export default FileTabs;
