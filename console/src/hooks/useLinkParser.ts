import { inject, provide, useSlots } from 'vue'
import type { Component, InjectionKey, Slot } from 'vue'
import type { DLink } from '../definition'
import { encode } from '../core/encode'
import type { EncodeTypeResult, LinkStore } from '../core/encode'

export type ConsoleLinkRender = Component<{ href: string }> | Slot | string

export interface ConsoleLinkParser {
  render?: ConsoleLinkRender
  store?: LinkStore
  _getListLinkAsync?: (link: DLink) => Promise<EncodeTypeResult>
  readLinkObjectAsync?: (link: DLink) => Promise<EncodeTypeResult>
  callFnLinkAsync?: (link: DLink) => Promise<EncodeTypeResult>
}

export const ConsoleLinkParserInjectKey = Symbol('ConsoleLinkParser') as InjectionKey<ConsoleLinkParser>

export function provideConsoleLinkParser(props: ConsoleLinkParser) {
  async function _getListLinkAsync(link: DLink): Promise<EncodeTypeResult> {
    const fn = props.store.get(link['@link'])
    if (typeof fn !== 'function') {
      return await {
        '@t': 'error',
        '@first': false,
        '@stack': 'Error: this memory freed.',
        '@real': null,
      }
    }

    return await encode(fn(), {
      first: false,
      linkReal: true,
      store: props.store,
    })
  }

  async function readLinkObjectAsync(link: DLink): Promise<EncodeTypeResult> {
    const obj = props.store.get(link['@link'])
    return encode(obj, {
      first: false,
      linkReal: false,
      store: props.store,
    })
  }

  async function callFnLinkAsync(link: DLink): Promise<EncodeTypeResult> {
    const fn = props.store.get(link['@link'])

    if (typeof fn !== 'function') {
      return {
        '@t': 'error',
        '@first': false,
        '@stack': 'Error: this memory freed.',
        '@real': null,
      }
    }

    return encode(fn(), {
      first: false,
      linkReal: true,
      store: props.store,
    })
  }

  return provide(ConsoleLinkParserInjectKey, {
    _getListLinkAsync,
    readLinkObjectAsync,
    callFnLinkAsync,
    ...props,
  })
}

export function useConsoleLinkParser() {
  return inject(ConsoleLinkParserInjectKey)
}

export function useLinkRender() {
  const { render } = useConsoleLinkParser()
  const slots = useSlots()
  return render ?? slots.anchor ?? 'a'
}
