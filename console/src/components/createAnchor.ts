import type { Component, Slot } from "vue"
import { h } from "vue"

export function createAnchor(
  component: Component | Slot | string,
  options: {
    target: string
    text: string
    href: string
    class?: string | string[]
  }
) {
  if (typeof component === "function") return h("span", [(component as Slot)(options)])

  return h(
    component,
    {
      href: options.href,
      target: options.target,
      class: options.class
    },
    [options.text]
  )
}
