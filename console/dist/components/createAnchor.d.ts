import type { Component, Slot } from "vue";
export declare function createAnchor(component: Component | Slot | string, options: {
    target: string;
    text: string;
    href: string;
    class?: string | string[];
}): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
