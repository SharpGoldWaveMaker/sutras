import { BundledLanguage, BundledTheme, HighlighterGeneric } from 'shiki';

export type CodeRender = (str: string, lang: string) => string;
export interface CreateRenderResult {
    highlighter: HighlighterGeneric<BundledLanguage, BundledTheme>;
    render: CodeRender;
}
export declare function prepareHighlighter(): Promise<HighlighterGeneric<BundledLanguage, BundledTheme>>;
export declare function createRender(): Promise<CodeRender>;
