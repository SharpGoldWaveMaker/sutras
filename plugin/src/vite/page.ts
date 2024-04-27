import { getPageInjectSymbol, parseMatter } from '@sgwm-sutras/shared'

export interface Page {
  content: string
  frontmatter: Record<string, any>
  path: string
  package?: string
  component?: string
  append: PageAppend
}

interface PageAppend {
  headers: string[]
  footers: string[]
  scriptSetups: Set<string>
}

export function createPage(raw: string, _path: string): Page {
  const { content, data: frontmatter } = parseMatter(raw.trim())
  const append = {
    headers: [],
    footers: [],
    scriptSetups: new Set<string>([
      `import { provide, defineAsyncComponent } from 'vue'`,
      `import { useData } from 'vitepress'`,
      `provide('${getPageInjectSymbol()}', useData())`,
    ]),
  }
  return {
    content,
    frontmatter,
    path: _path,
    package: frontmatter.package,
    component: frontmatter.component,
    append,
  }
}

export function combinePage(page: Page, content: string) {
  return parseMatter.stringify(
    combineMarkdown(
      content,
      [combineScriptSetup(page.append.scriptSetups)],
      page.append.footers,
    ),
    page.frontmatter,
  )
}

function combineScriptSetup(scriptSetups: Set<string>) {
  return `
<script setup>
  ${Array.from(scriptSetups).join('\n')}
</script>
  `
}

function combineMarkdown(code: string, headers: string[], footers: string[]) {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstHeader = code.search(/\n#{1,6}\s.+/)
  const sliceIndex
    = firstHeader < 0
      ? frontmatterEnds < 0
        ? 0
        : frontmatterEnds + 4
      : firstHeader

  if (headers.length > 0) {
    code
      = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  }
  code += footers.join('\n')

  return `${code}\n`
}
