import { LRUCache } from 'lru-cache';
import type Markdownit from 'markdown-it'
import { kebabCase, SFCParseResult, parseDocMetaBadge, SFCDocMeta, formatSFC, formatSFCJS, DemoContext, langFromExtension, TSParseResult, SourceFile, DemoFile, ParseResult, ParseBasicResult} from '@sgwm-sutras/shared'
import { parseAttrs, type Attrs } from './attrs';

const cache = new LRUCache<string, string>({ max: 1024 });

export function transform(md: Markdownit, token: Markdownit.Token): string {
  const attrsStr = token.info?.trim().match(/^demo\s*(.*)$/)?.[1];
  if(!attrsStr?.trim()){
      return ''
  }
  const cached = cache.get(attrsStr);
  if (cached) {
    return cached;
  }

  const attrs = parseAttrs(attrsStr) as Attrs
  const result = doTransform(md, attrs)

  cache.set(attrsStr, result);
  return result;
};

function doTransform(md: Markdownit, attrs: Attrs) {
  const {identifier, codes} = attrs || {}
  const codesParsed = JSON.parse(decodeURIComponent(codes)) as TransCodeItem[];
  const {docMeta, docContent} = codesParsed[0].parsed as ParseResult

  const titleHtml = renderTitle(md, identifier, docMeta)
  const descriptionHtml = docContent ? md.render(docContent).trim() : ''
  const codeSlotsStr = renderCodeSlotsStr(md, codesParsed)
  const newContent = `
<demo
  key="${identifier}"
>
  <template #title>
    ${titleHtml ?? ''}
  </template>
  <template #description>
    ${descriptionHtml}
  </template>
  <template #default>
    <${identifier}/>
  </template>
  ${codeSlotsStr}
</demo>
`;
  return newContent;
}

function renderCode(md: Markdownit, code?: string, lang?: string, highlight?: string): string {
  if(!code){
    return ''
  }
  let html = md.render(`\`\`\`${lang} ${highlight ?? ''}
${code}
\`\`\``);
  return html
    ?.replace(/import\.meta/g, 'import.<wbr/>meta')
    ?.replace(/process\.env/g, 'process.<wbr/>env');
}

function renderTitle(md: Markdownit, identifier: string, docMeta?: SFCDocMeta){
  if(!docMeta?.title){
    return
  }
  let badgeHtml
  if(docMeta?.badge){
    const {type, content} = parseDocMetaBadge(docMeta.badge)
    badgeHtml = `<Badge type="${type}">${content}</Badge>`
  }
  const title = docMeta?.title
  return md.render(`## ${title} ${badgeHtml ? badgeHtml : ''} {#${kebabCase(identifier)}}`).trim()
}

type TransCodeItem = Pick<DemoFile, 'identifier' | 'extension' | 'parsed'>

function renderCodeSlotsStr(md: Markdownit, transCodeItems: TransCodeItem[]){
  return transCodeItems.reduce((result: string, {identifier, extension, parsed}) => {
    const lang = langFromExtension(extension)
    if(lang === 'vue'){
      const parsedSFC = parsed as SFCParseResult
      result += `${result ? '\n  ' : ''}<template #code-${identifier}>
    ${renderCode(md, formatSFC(parsedSFC), lang, parsedSFC.docMeta?.highlight)}
  </template>`
      if(parsedSFC.isScriptLangTS){
        result += `${result ? '\n  ' : ''}<template #codejs-${identifier}>
    ${renderCode(md, formatSFCJS(parsedSFC), lang, parsedSFC.docMeta?.highlight)}
  </template>`
      }
      return result
    }

    if(lang === 'ts' || lang === 'tsx'){
      const parsedTS = parsed as TSParseResult
      result += `${result ? '\n  ' : ''}<template #code-${identifier}>
    ${renderCode(md, parsedTS.ts, lang)}
  </template>`
      result += `${result ? '\n  ' : ''}<template #codejs-${identifier}>
    ${renderCode(md, parsedTS.js, lang)}
  </template>`
      return result
    }

    result += `${result ? '\n  ' : ''}<template #code-${identifier}>
    ${renderCode(md, parsed.code, lang)}
  </template>`
  
    return result
  }, '')
}

