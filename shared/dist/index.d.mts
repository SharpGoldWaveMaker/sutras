import * as vue from 'vue';
import { SFCDescriptor } from '@vue/compiler-sfc';
export { default as parseMatter } from 'gray-matter';
export { find, flatMap, flatten, head, kebabCase, map, pick, pickBy, repeat, tail, uniqueId } from 'lodash-es';

type PackageOption = {
    /**
     * @name 包名
     * @description package.json 中的 name 项
     */
    name: string;
    path: string;
    /**
     * @name 包名
     * @description package.json 中的 name 项
     */
    alias?: string | string[];
};
declare const IGNORE_ALIAS_NAMES: string[];
declare class Package {
    readonly name: PackageOption['name'];
    readonly _path: PackageOption['path'];
    readonly alias: string[];
    readonly resolvedPath?: string;
    constructor(option: PackageOption);
    get path(): string;
    hasSamePath(pkg: PackageOption): boolean;
    static checkPackages(packages: Package[]): void;
}

type UserConfig = {
    /**
     * @name 工作目录
     */
    root?: string;
    /**
     * @name packages配置
     */
    packages?: PackageOption[];
    /**
     * @name demoDirname
     * @default "__demos__"
     */
    demoDirname?: string;
    /**
     * @name 使用文档结构作为package, component
     * @default: true
     */
    useDocPath?: boolean;
    /**
     * @name 是否为包自动添加别名解析
     * @default: true
     */
    autoResolveAlias?: boolean;
    /**
     * @name importMap全局配置
     * @description
     */
    importMap?: ImportMap;
    /**
     * @name 调试模式
     * @description
     */
    debug?: boolean;
    demo?: DemoConfig;
};
interface DemoConfig {
    /**
     * @name 展示方式
     * @default 'block'
     */
    defaultPreviewMode?: PreviewMode;
    /**
     * @name 展示方式区高度
     * @default 'auto'
     */
    previewHeight?: PreviewHeight;
    /**
     * @name SSR模式
     * @default 'both'
     */
    enableSSR?: SSREnableType;
    /**
     * @name SSR默认模式
     * @default 'client'
     */
    defaultRenderMode?: SSRModeType;
    /**
     * @name 是否允许编辑
     * @description 为true时，将支持repl，默认可编辑
     */
    enableREPL?: boolean;
    /**
     * @name demo展示样式风格
     * @description 内置样式，也可自定义样式，自行实现demo展示组件
     */
    style?: 'box' | 'box-compact' | 'plain' | 'plain-compact';
    /**
    * @name 背景色
    * @description 特殊情况需要定义demo背景色，比如展示ghost
    */
    background?: string;
    /**
     * @name 源码地址
     */
    sourceURL?: string | ((demo: DemoContextBasic) => string);
    /**
     * @name 默认是否折叠代码块
     */
    defaultCodeCollapse?: boolean;
    /**
     * @name 设备列表
     */
    deviceList?: DeviceList;
    /**
     * @name 默认设备
     * @default 'Default'
     */
    defaultDevice?: string;
}
type DeviceSize = [number, number];
type DeviceList = Record<string, DeviceSize>;
type DemoContextBasic = Pick<DemoContext, 'component' | 'entry' | 'package' | 'page' | 'meta'>;
type PreviewMode = 'block' | 'terminal' | 'browser';
type PreviewHeight = 'auto' | number | string;
type SandboxConfigType = boolean | number | string;
type ResolvedConfig = Omit<UserConfig, 'root' | 'packages'> & {
    root: string;
    packages: Package[];
    base?: string;
    assetsDir?: string;
};

type SFCScriptLangType = 'js' | 'ts';
type SFCDocMeta = {
    /**
     * @name 标题
     */
    title?: string;
    /**
     * @name 徽章
     * @description ${type}-${content} 或 ${content}，type: 参见vitepress badge
     */
    badge?: string;
    /**
     * @name 调试模式
     * @description 用于标记开发状态，默认dev下为debug模式，prod下关闭debug模式
     */
    debug?: string;
    /**
     * @name 其他需展示的文件路径
     * @description 相对路径，需要同时在script中被引用到
     */
    includes?: string[];
    /**
     * @name 代码高亮
     * @description 参见[vitepress](https://vitepress.dev/zh/guide/markdown#line-highlighting-in-code-blocks)
     */
    highlight?: string;
} & DemoConfig;
type SSREnableType = 'clientOnly' | 'serverOnly' | 'both' | true | false;
type SSRModeType = 'client' | 'server';
declare const badgeTypes: ["info", "tip", "warning", "danger"];
type BadgeType = (typeof badgeTypes)[number];

type DemoToken = {
    _id: string;
    _basepath: string;
    path: string;
    isDir: boolean;
    local?: boolean;
    package?: string;
    component?: string;
};
type DemoGlobalConfig = {
    importMap: ImportMap;
};
type DemoFile = Omit<SourceFile, 'filepath' | 'includes'> & {
    identifier: string;
    path: string;
    importMap: ImportMap;
};
type DemoPage = {
    frontmatter: Record<string, any>;
};
type DemoMeta = SFCDocMeta;
type SiteConfig = {
    assetsDir: string;
    base: string;
};
type DemoContext = {
    identifier: string;
    package?: string;
    component?: string;
    entry: string;
    page: DemoPage;
    meta: DemoMeta;
    files: DemoFile[];
    importMap: ImportMap;
    site: SiteConfig;
};

declare function getDemoInjectSymbol(name: string): string;
declare function getPageInjectSymbol(): string;

declare function stringifyDemoContext(context: DemoContext): string;

declare function parseFilesFromDemoContext(context: DemoContext): File[];

interface ParseResult {
    code: string;
    docMeta: DemoMeta;
}

type ParseSFCDescriptorResult = {
    errors?: Error[];
    descriptor?: SFCDescriptor;
};
interface SFCParseResult extends ParseResult {
    /**
     * @name template源代码
     */
    template?: string;
    /**
     * @name style源代码
     */
    styles?: string[];
    /**
     * @name script源代码
     */
    script?: string;
    /**
     * @name 是否是setup
     */
    isSetupScript?: boolean;
    /**
     * @name script是否使用TS
     */
    isScriptLangTS?: boolean;
    /**
     * @name script经TS编译后的纯JS代码
     * @description 如果不使用TS，jsCode = script
     */
    jsCode?: string;
    /**
     * @name 文档内容
     */
    docContent?: string;
}
declare function parseSFCDescriptor(rawContent: string): ParseSFCDescriptorResult;
declare function parseSFC(rawContent: string): Promise<SFCParseResult>;
declare function parseSFCStyles(descriptor: SFCDescriptor): string[];
declare function isVueDocsSFC(rawContent: string): boolean;
declare function parseSFCDocContent(descriptor: SFCDescriptor): string | undefined;
declare function parseSFCScriptLangType(descriptor: SFCDescriptor): SFCScriptLangType;
declare function parseSFCDocs(descriptor: SFCDescriptor): Pick<SFCParseResult, 'docContent' | 'docMeta'>;
declare function parseDocMetaBadge(badgeStr: string): {
    type: BadgeType;
    content: string;
};

declare function parseTS(rawContent: string): Promise<TSParseResult>;
interface TSParseResult extends ParseResult {
    js: string;
    ts: string;
}

declare function parseFile(filepath: string, rawContent: string, entryPath: string): Promise<SourceFile | undefined>;
declare function isFileUseTS(file: File): boolean | undefined;

type SourceFile = {
    /**
     * @name 文件源码路径
     */
    filepath: string;
    /**
     * @name 文件相对于入口的路径
     * @description 对应入口文件的importMap
     */
    pathFromEntry: string;
    /**
     * @name 文件名
     * @description 不带后缀
     */
    filename: FileName;
    /**
     * @name 文件源码
     */
    code: FileCode;
    /**
     * @name 文件后缀
     */
    extension: FileExtension;
    /**
     * @name 解析结果
     */
    parsed: ParseResult | SFCParseResult | TSParseResult;
    /**
     * @name 是否是入口文件
     */
    isEntry: boolean;
    /**
     * @name 包含的文件
     */
    includes?: SourceFile[];
};
/**
 * @name 文件信息
 * @description 用于管理编译状态
 */
declare class File {
    readonly identifier: FileIdentifier;
    readonly filename: FileName;
    readonly extension: FileExtension;
    readonly isEntry: boolean;
    readonly pathFromEntry: string;
    readonly parsed: SFCParseResult | TSParseResult | string;
    code: FileCode;
    compiled: FileCompiled | null;
    constructor(option: Pick<File, 'identifier' | 'filename' | 'extension' | 'isEntry' | 'pathFromEntry' | 'code' | 'parsed'>);
    get isJS(): boolean;
    get isJSX(): boolean;
    get isJSON(): boolean;
    get isTS(): boolean;
    get isTSX(): boolean;
    get isSFC(): boolean;
    get isCSS(): boolean;
    get isHTML(): boolean;
}
type FileMap = Map<FileIdentifier, File>;
type FileIdentifier = string;
declare const fileExtensions: [".vue", ".js", ".jsx", ".ts", ".tsx", ".html", ".css", ".json"];
type FileExtension = (typeof fileExtensions)[number];
/**
 * @name 文件编译结果
 * @description json文件将转化成js对象
 */
type FileCompiled = {
    js?: string;
    ssr?: string;
    css?: string;
};
/** 语义化 */
type FileName = string;
type FileCode = string;

declare function compileFile(file: File, useCache?: boolean): Promise<CompileResult>;
type CompileResult = Error[];

type CompileModulesOption = {
    /**
     * @name 文件列表
     */
    files: File[];
    /**
     * @name 是否启用SSR
     */
    isSSR: boolean;
};
declare function transformModules(opt: CompileModulesOption): string[];

declare function transformTS(rawContent: string): Promise<string>;

declare function findEntryFile(files: File[]): File | undefined;
declare function langFromExtension(extension: FileExtension): string;
declare function isRelativeSourcePath(source: string): boolean;
declare function findLocalFile(source: string, file: File, files: File[]): File | null | undefined;

type ImportIdentifier = string;
type ImportMap = {
    imports?: Record<ImportIdentifier, ImportSource>;
    scopes?: Record<string, Record<ImportIdentifier, ImportSource>>;
};
type ImportSource = string | (() => Promise<any>);
/**
 * 合并importMap, 设置vue编译内核版本
 * ！暂不支持外部定义vue编译内核，内核版本以线上版本为主
 * @param defaultImportMap
 * @param defaults
 * @returns
 */
declare function useVueImportMap(importMap: ImportMap, site: SiteConfig, defaults?: {
    runtimeDev?: string | (() => string);
    runtimeProd?: string | (() => string);
    serverRenderer?: string | (() => string);
    vueVersion?: string | null;
}): {
    productionMode: vue.Ref<boolean>;
    importMap: vue.ComputedRef<ImportMap>;
    vueVersion: vue.Ref<string | null>;
    defaultVersion: string;
};
declare function mergeImportMap(source1: ImportMap, source2: ImportMap): {
    imports: {
        [x: string]: ImportSource;
    };
    scopes: {
        [x: string]: Record<string, ImportSource>;
    };
};
declare function getImportIdentifier(pathFromEntry: string, source: string): string;

/**
 * 格式化vue sfc
 * @param sfc
 * @returns
 */
declare function formatSFC(parsedSFC: SFCParseResult): string;
/**
 * 格式化js版本vue sfc
 * @param sfc
 * @returns
 */
declare function formatSFCJS(parsedSFC: SFCParseResult): string | undefined;

type PathObject = {
    dir: string;
    root: string;
    base: string;
    name: string;
    ext: string;
};
declare const browserPath: {
    normalize: (path: string) => string;
    join(...args: string[]): string;
    relative: (from: string, to: string) => string;
    dirname: (path: string) => string;
    basename: (path: string, ext: string) => string;
    extname: (path: string) => string;
    format: (pathObject: PathObject) => string;
    parse: (path: string) => {
        root: string;
        dir: string;
        base: string;
        ext: string;
        name: string;
    };
    sep: string;
    delimiter: string;
    win32: null;
    posix: null;
};

declare const pascalCase: (str: string) => string;
declare const tuple: <T extends string[]>(...args: T) => T;

export { type BadgeType, type CompileResult, type DemoConfig, type DemoContext, type DemoContextBasic, type DemoFile, type DemoGlobalConfig, type DemoMeta, type DemoPage, type DemoToken, type DeviceList, type DeviceSize, File, type FileCode, type FileCompiled, type FileExtension, type FileIdentifier, type FileMap, type FileName, IGNORE_ALIAS_NAMES, type ImportIdentifier, type ImportMap, type ImportSource, Package, type PackageOption, type PreviewHeight, type PreviewMode, type ResolvedConfig, type SFCDocMeta, type SFCParseResult, type SFCScriptLangType, type SSREnableType, type SSRModeType, type SandboxConfigType, type SiteConfig, type SourceFile, type TSParseResult, type UserConfig, badgeTypes, browserPath, compileFile, fileExtensions, findEntryFile, findLocalFile, formatSFC, formatSFCJS, getDemoInjectSymbol, getImportIdentifier, getPageInjectSymbol, isFileUseTS, isRelativeSourcePath, isVueDocsSFC, langFromExtension, mergeImportMap, parseDocMetaBadge, parseFile, parseFilesFromDemoContext, parseSFC, parseSFCDescriptor, parseSFCDocContent, parseSFCDocs, parseSFCScriptLangType, parseSFCStyles, parseTS, pascalCase, stringifyDemoContext, transformModules, transformTS, tuple, useVueImportMap };
