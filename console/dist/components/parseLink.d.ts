import type { Component, Slot, VNode } from "vue";
export declare function parseLink(text: string, options?: {
    minifyLink?: boolean;
    classes?: string;
    component?: string | Component | Slot;
}): (string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>)[];
