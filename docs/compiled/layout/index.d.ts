import { AvatarProps as AvatarProps_2 } from 'maya-components';
import { ChangeEvent } from '@maya/utils';
import { ComponentOptionsMixin } from 'vue';
import { ComputedRef } from 'vue';
import { CSSInterpolation } from '@maya/cssinjs';
import { CSSObject } from '@maya/cssinjs';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { FunctionalComponent } from 'vue';
import { GenerateStyle } from '@maya/style';
import { GlobalToken } from '@maya/style';
import { InputProps } from 'maya-components';
import { JSX } from 'vue/jsx-runtime';
import { Key } from '@maya/utils';
import { MenuItem } from '@maya/runtime';
import { MessageDescripter } from '@maya/intl';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { Route } from 'maya-components/es/Breadcrumb/interface';
import { ScreenSizeType } from '@maya/utils';
import { SlotsType } from 'vue';
import { ThemeConfig } from '@maya/provider';
import { VNode } from 'vue';
import { VueNode } from '@maya/utils';

export declare const Avatar: FunctionalComponent<AvatarProps>;

declare type AvatarProps = Partial<AvatarProps_2 & {
    title?: string;
}>;

declare type AvatarRenderFunction = (props: AvatarRenderProps) => VueNode;

declare type AvatarRenderProps = {
    context: LayoutContext;
};

declare type CommonSlotProps = {
    props: PageHeaderProps;
    default: VNode;
};

declare interface ComponentToken {
    colorPrimary: string;
    /**
     * 跨站点应用的图标hover颜色
     */
    colorBgAppListIconHover: string;
    /**
     * 跨站点应用的图标hover颜色
     */
    colorTextAppListIconHover: string;
    /**
     * 跨站点应用的图标hover颜色
     */
    colorTextAppListIcon: string;
    /**
     * layout 的背景颜色
     */
    bgLayout: string;
}

declare interface ComponentToken_2 {
    colorBgHeader: string;
    colorBgScrollHeader: string;
    colorHeaderTitle: string;
    colorBgMenuItemHover: string;
    colorBgMenuElevated: string;
    colorBgMenuItemSelected: string;
    colorTextMenuSelected: string;
    colorTextMenuActive: string;
    colorTextMenu: string;
    colorTextMenuSecondary: string;
    colorBgRightActionsItemHover: string;
    colorTextRightActionsItem: string;
    heightLayoutHeader: number;
}

declare interface ComponentToken_3 {
    colorBgCollapsedButton: string;
    colorTextCollapsedButtonHover: string;
    colorTextCollapsedButton: string;
    colorMenuBackground: string;
    colorMenuItemDivider: string;
    colorBgMenuItemHover: string;
    colorBgMenuItemSelected: string;
    colorTextMenuSelected: string;
    colorTextMenuItemHover: string;
    colorTextMenuActive: string;
    colorTextMenu: string;
    colorTextMenuSecondary: string;
    paddingInlineLayoutMenu: number;
    paddingBlockLayoutMenu: number;
    /**
     * menu 顶部 title 的字体颜色
     */
    colorTextMenuTitle: string;
    colorTextSubMenuSelected: string;
}

declare interface ComponentToken_4 {
    /**
     * pageContainer 的背景颜色
     */
    colorBgPageContainer: string;
    /**
     * pageContainer 自带的 padding inline
     */
    paddingInlinePageContainerContent: number;
    /**
     * pageContainer 自带的 padding block
     */
    paddingBlockPageContainerContent: number;
    /**
     * pageContainer 被固定时的背景颜色
     */
    colorBgPageContainerFixed: string;
}

export declare type ComponentTokenMap = {
    MayaLayout?: ComponentToken;
    MayaLayoutHeader?: ComponentToken_2;
    MayaLayoutSider?: ComponentToken_3;
};

declare type ContentWidthType = 'Fluid' | 'Fixed';

export declare const Footer: DefineComponent<    {
style: PropType<CSSProperties>;
links: PropType<FooterLinkItem[]>;
copyright: PropType<VueNode>;
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
style: PropType<CSSProperties>;
links: PropType<FooterLinkItem[]>;
copyright: PropType<VueNode>;
}>>, {}, {}>;

declare type FooterLinkItem = {
    key?: string;
    title: VueNode;
    href: string;
    blankTarget?: boolean;
};

export declare const HeaderSearch: FunctionalComponent<HeaderSearchProps>;

declare type HeaderSearchProps = Partial<InputProps & {
    inputPrefixCls?: string;
    enterButton?: VueNode | (() => VueNode);
    onSearch?: (value: string, event?: ChangeEvent | MouseEvent | KeyboardEvent) => void;
}>;

declare const Layout: DefineComponent<    {
pure: {
type: BooleanConstructor;
default: boolean;
};
hasSider: {
type: BooleanConstructor;
default: boolean;
};
siderWidth: {
type: NumberConstructor;
default: number;
};
defaultCollapsed: {
type: BooleanConstructor;
default: boolean;
};
style: PropType<CSSProperties>;
menus: PropType<MenuItem[]>;
theme: PropType<ThemeConfig>;
layout: {
type: PropType<LayoutType>;
default: string;
};
title: StringConstructor;
logo: PropType<Logo>;
siderMenuType: PropType<SiderMenuType>;
siderFixed: {
type: BooleanConstructor;
default: boolean;
};
splitMenus: {
type: BooleanConstructor;
default: boolean;
};
collapsedShowTitle: {
type: BooleanConstructor;
default: boolean;
};
loading: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
pure: {
type: BooleanConstructor;
default: boolean;
};
hasSider: {
type: BooleanConstructor;
default: boolean;
};
siderWidth: {
type: NumberConstructor;
default: number;
};
defaultCollapsed: {
type: BooleanConstructor;
default: boolean;
};
style: PropType<CSSProperties>;
menus: PropType<MenuItem[]>;
theme: PropType<ThemeConfig>;
layout: {
type: PropType<LayoutType>;
default: string;
};
title: StringConstructor;
logo: PropType<Logo>;
siderMenuType: PropType<SiderMenuType>;
siderFixed: {
type: BooleanConstructor;
default: boolean;
};
splitMenus: {
type: BooleanConstructor;
default: boolean;
};
collapsedShowTitle: {
type: BooleanConstructor;
default: boolean;
};
loading: BooleanConstructor;
}>>, {
layout: LayoutType;
pure: boolean;
hasSider: boolean;
siderWidth: number;
defaultCollapsed: boolean;
siderFixed: boolean;
splitMenus: boolean;
collapsedShowTitle: boolean;
loading: boolean;
}, LayoutSlots>;
export default Layout;

declare interface LayoutContext {
    logo: ComputedRef<VueNode | (() => VueNode)>;
    title: ComputedRef<string>;
    theme: ComputedRef<ThemeConfig>;
    /**
     * @name 简约模式，设置了之后不渲染的任何 layout 的东西，但是会有 context，可以获取到当前菜单。
     *
     * @example pure={true}
     */
    pure: ComputedRef<boolean>;
    layout: ComputedRef<LayoutType>;
    isMobile: ComputedRef<boolean>;
    screenSize: ComputedRef<ScreenSizeType>;
    siderWidth: ComputedRef<number>;
    siderCollapsed: ComputedRef<boolean>;
    setSiderCollapsed: (collapse: boolean) => void;
    siderFixed: ComputedRef<boolean>;
    siderMenuType: ComputedRef<SiderMenuType>;
    shouldSiderRender: ComputedRef<boolean>;
    hideSiderContentWhenCollapsed: ComputedRef<boolean>;
    hasHeader: ComputedRef<boolean>;
    headerFixed: ComputedRef<boolean>;
    shouldHeaderRender: ComputedRef<boolean>;
    footerToolbarCounts: ComputedRef<number>;
    registerFooterToolbar: () => void;
    deregisterFooterToolbar: () => void;
    contentWidthType: ComputedRef<ContentWidthType>;
    pageContainerCounts: ComputedRef<number>;
    registerPageContainer: () => void;
    deregisterPageContainer: () => void;
    stylish: ComputedRef<LayoutStylish>;
    iconfontUrl: ComputedRef<string | string[]>;
    iconPrefix: ComputedRef<string>;
    useLocale: ComputedRef<boolean>;
    formatMessage: (message: MessageDescripter) => string;
    /** 动态渲染 */
    actionsRender: ComputedRef<() => VueNode[]>;
    avatarRender: ComputedRef<AvatarRenderFunction>;
    titleRender: ComputedRef<TitleRenderFunction>;
    siderMenus: ComputedRef<MenuItem[]>;
    headerMenus: ComputedRef<MenuItem[]>;
    matchMenuKeys: ComputedRef<string[]>;
    matchMenus: ComputedRef<MenuItem[]>;
}

declare interface LayoutHeaderToken extends GlobalToken, ComponentToken_2 {
    componentCls: string;
}

declare interface LayoutSiderToken extends GlobalToken, ComponentToken_3, ComponentToken_2 {
    componentCls: string;
    collapsedWidth: number;
}

declare type LayoutSlots = SlotsType<{
    header: any;
    sider: any;
    footer: any;
    default: any;
    title: TitleRenderProps;
    avatar: AvatarRenderProps;
    actions: any;
}>;

declare type LayoutStylish = {
    sider?: GenerateStyle<LayoutSiderToken>;
    header?: GenerateStyle<LayoutHeaderToken>;
};

/**
 * @name layout 的布局方式
 * @type  'side' | 'top' | 'mix'
 *
 * @example 顶部菜单 layout="top"
 * @example 侧边菜单 layout="side"
 * @example 混合布局 既有顶部也有侧边 layout="mix"
 */
declare type LayoutType = 'side' | 'top' | 'mix';

declare type Logo = VueNode | (() => VueNode);

export declare const PageContainer: DefineComponent<    {
title: StringConstructor;
loading: BooleanConstructor;
stylish: PropType<GenerateStyle<PageContainerToken, CSSInterpolation>>;
style: PropType<CSSProperties>;
headerFixed: {
type: BooleanConstructor;
default: boolean;
};
}, () => JSX.Element, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
title: StringConstructor;
loading: BooleanConstructor;
stylish: PropType<GenerateStyle<PageContainerToken, CSSInterpolation>>;
style: PropType<CSSProperties>;
headerFixed: {
type: BooleanConstructor;
default: boolean;
};
}>>, {
loading: boolean;
headerFixed: boolean;
}, PageContainerSlots>;

declare type PageContainerSlots = SlotsType<{
    title: any;
    header: any;
    extra: any;
    affix: any;
    footer: any;
    breadcrumb: any;
    default: any;
}>;

declare interface PageContainerToken extends GlobalToken, ComponentToken_4 {
    componentCls: string;
}

export declare const PageHeader: DefineComponent<    {
tabs: PropType<PageHeaderTabItem[]>;
tabActiveKey: PropType<Key>;
onTabChange: PropType<(key: Key) => void>;
className: StringConstructor;
title: StringConstructor;
subTitle: StringConstructor;
style: PropType<CSSObject>;
contentStyle: PropType<CSSObject>;
onBack: PropType<(e: MouseEvent) => void>;
ghost: BooleanConstructor;
showBreadcrumb: {
type: BooleanConstructor;
default: boolean;
};
onBreadcrumbClick: PropType<(route: Route) => void>;
}, () => VueNode, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<    {
tabs: PropType<PageHeaderTabItem[]>;
tabActiveKey: PropType<Key>;
onTabChange: PropType<(key: Key) => void>;
className: StringConstructor;
title: StringConstructor;
subTitle: StringConstructor;
style: PropType<CSSObject>;
contentStyle: PropType<CSSObject>;
onBack: PropType<(e: MouseEvent) => void>;
ghost: BooleanConstructor;
showBreadcrumb: {
type: BooleanConstructor;
default: boolean;
};
onBreadcrumbClick: PropType<(route: Route) => void>;
}>>, {
ghost: boolean;
showBreadcrumb: boolean;
}, PageHeaderSlots>;

declare type PageHeaderProps = Partial<ExtractPropTypes<ReturnType<typeof pageHeaderProps>>>;

declare const pageHeaderProps: () => {
    tabs: PropType<PageHeaderTabItem[]>;
    tabActiveKey: PropType<Key>;
    onTabChange: PropType<(key: Key) => void>;
    className: StringConstructor;
    title: StringConstructor;
    subTitle: StringConstructor;
    style: PropType<CSSObject>;
    contentStyle: PropType<CSSObject>;
    onBack: PropType<(e: MouseEvent) => void>;
    ghost: BooleanConstructor;
    showBreadcrumb: {
        type: BooleanConstructor;
        default: boolean;
    };
    onBreadcrumbClick: PropType<(route: Route) => void>;
};

declare type PageHeaderSlots = SlotsType<{
    back: any;
    title: CommonSlotProps;
    subTitle: CommonSlotProps;
    breadcrumb: CommonSlotProps;
    tags: any;
    footer: any;
    extra: any;
    avatar: any;
    default: any;
    tabExtra: any;
}>;

declare type PageHeaderTabItem = {
    key: Key;
    tab: VueNode;
};

declare type SiderMenuType = 'sub' | 'group';

declare type TitleRenderFunction = (props: TitleRenderProps) => VueNode;

declare type TitleRenderProps = {
    logo: Logo;
    title: string;
    default: VueNode;
};

export { }
