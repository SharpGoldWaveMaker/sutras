import type { PropType } from 'vue';
import { type ConsoleLinkParser, type ConsoleTheme } from '../../hooks';
import type { LinkStore } from '../../core/encode';
declare const ConsoleProvider: import("vue").DefineComponent<{
    anchor: {
        type: PropType<ConsoleLinkParser>;
    };
    theme: {
        type: PropType<ConsoleTheme>;
    };
    store: {
        type: PropType<LinkStore>;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    anchor: {
        type: PropType<ConsoleLinkParser>;
    };
    theme: {
        type: PropType<ConsoleTheme>;
    };
    store: {
        type: PropType<LinkStore>;
    };
}>>, {}, {}>;
export default ConsoleProvider;
