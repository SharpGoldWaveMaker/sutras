import type { BundledLanguage, BundledTheme, HighlighterGeneric, ShikiTransformer } from 'shiki'
import { uniqueId } from '@sgwm-sutras/shared'
import { getHighlighter, isSpecialLang } from 'shiki'
import {
  type TransformerCompactLineOption,
  transformerCompactLineOptions,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from '@shikijs/transformers'

export type CodeRender = (str: string, lang: string) => string
export interface CreateRenderResult {
  highlighter: HighlighterGeneric<BundledLanguage, BundledTheme>
  render: CodeRender
}

const defaultLang = 'typescript'
const themes = { light: 'github-light', dark: 'github-dark' }
const langs = ['typescript', 'javascript', 'vue']

export async function prepareHighlighter() {
  return await getHighlighter({
    themes: [themes.light, themes.dark],
    langs,
  })
}

export async function createRender(): Promise<CodeRender> {
  const highlighter = await prepareHighlighter()
  const transformers: ShikiTransformer[] = [
    transformerNotationDiff(),
    transformerNotationFocus({
      classActiveLine: 'has-focus',
      classActivePre: 'has-focused-lines',
    }),
    transformerNotationHighlight(),
    transformerNotationErrorLevel(),
    {
      name: 'vitepress:add-class',
      pre(node) {
        this.addClassToHast(node, 'vp-code')
      },
    },
    {
      name: 'vitepress:clean-up',
      pre(node) {
        delete node.properties.tabindex
        delete node.properties.style
      },
    },
  ]

  const vueRE = /-vue$/
  const lineNoStartRE = /=(\d*)/
  const lineNoRE = /:(no-)?line-numbers(=\d*)?$/
  const mustacheRE = /\{\{.*?\}\}/g

  return (str: string, lang: string) => {
    const vPre = vueRE.test(lang) ? '' : 'v-pre'
    lang
          = lang
        .replace(lineNoStartRE, '')
        .replace(lineNoRE, '')
        .replace(vueRE, '')
        .toLowerCase() || defaultLang

    if (lang) {
      const langLoaded = highlighter.getLoadedLanguages().includes(lang as any)
      if (!langLoaded && !isSpecialLang(lang))
        lang = defaultLang
    }

    const lineOptions: TransformerCompactLineOption[] = []
    const mustaches = new Map<string, string>()

    const removeMustache = (s: string) => {
      if (vPre)
        return s
      return s.replace(mustacheRE, (match) => {
        let marker = mustaches.get(match)
        if (!marker) {
          marker = uniqueId()
          mustaches.set(match, marker)
        }
        return marker
      })
    }

    const restoreMustache = (s: string) => {
      mustaches.forEach((marker, match) => {
        s = s.replaceAll(marker, match)
      })
      return s
    }

    str = removeMustache(str).trimEnd()

    const highlighted = highlighter.codeToHtml(str, {
      lang,
      transformers: [
        ...transformers,
        transformerCompactLineOptions(lineOptions),
        {
          name: 'vitepress:v-pre',
          pre(node) {
            if (vPre)
              node.properties['v-pre'] = ''
          },
        },
        {
          name: 'vitepress:empty-line',
          code(hast) {
            hast.children.forEach((span) => {
              if (
                span.type === 'element'
                && span.tagName === 'span'
                && Array.isArray(span.properties.class)
                && span.properties.class.includes('line')
                && span.children.length === 0
              ) {
                span.children.push({
                  type: 'element',
                  tagName: 'wbr',
                  properties: {},
                  children: [],
                })
              }
            })
          },
        },
      ],
      themes,
      defaultColor: false,
    })
    return restoreMustache(highlighted)
  }
}
