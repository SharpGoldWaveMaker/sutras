import { LRUCache } from 'lru-cache'
import type {
  DemoContext,
  DemoToken,
  ResolvedConfig,
  DemoFile
} from '@sgwm-sutras/shared'
import {
  getDemoInjectSymbol,
  pick,
  stringifyDemoContext,
} from '@sgwm-sutras/shared'
import { createPathMatcher } from './parse/path'
import { combinePage, createPage } from './page'
import { parseTokens } from './parse/token'
import { parseDemoContext } from './parse/demo'
import { parseSourceFile } from './parse/file'

const cache = new LRUCache<string, string>({ max: 1024 })

export interface ComponentProvideContext {
  importMap: Record<string, any>
}

export function createTransformer(config: ResolvedConfig) {
  const pathMatcher = createPathMatcher(config)

  return async function (raw: string = '', pagePath: string) {
    const cached = cache.get(raw)
    if (cached)
      return cached

    const page = createPage(raw, pagePath)

    let { tokens, markedContent } = parseTokens(page)

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]
      const paths = pathMatcher(token)
      const contexts: DemoContext[] = []
      for (let j = 0; j < paths.length; j++) {
        const demoPath = paths[j]
        const file = await parseSourceFile(demoPath)
        if (!file)
          return

        const context = parseDemoContext(file, token, page, config)
        contexts.push(context)
        page.append.scriptSetups.add(
          `const ${context.identifier} = defineAsyncComponent(() => import('${context.files[0].path}'))`,
        )
        page.append.scriptSetups.add(
          `provide('${getDemoInjectSymbol(context.identifier)}', ${stringifyDemoContext(context)})`,
        )
      }
      markedContent = transformDemoBlocks(markedContent, token, contexts)
    }

    const content = combinePage(page, markedContent)

    cache.set(raw, content)
    return content
  }
}

function transformDemoBlocks(content: string, token: DemoToken, contexts: DemoContext[]) {
  if (!content)
    return ''

  const blocksStr = contexts.reduce((str, context) => {
    const { identifier} = context
    const codes = context.files.map((file: DemoFile) => pick(file, ['identifier', 'parsed', 'extension']))
    const codesStr = encodeURIComponent(JSON.stringify(codes))
    return str += `${str ? '\n' : ''}::: demo identifier="${identifier}" codes="${codesStr}"`
  }, '')
  return content.replace(token._id, `${blocksStr}\n`)
}
