import { parse } from 'comment-parser'
import { DemoMeta } from '../../demo';



function parseCommentTagValue(type: string, value: string) {
  switch (type) {
      case 'boolean':
          return value.toLowerCase() === 'true';
      case 'number':
          return Number(value);
      case 'string':
          return value
      case 'array':
          const items = value.split(/,\s*|，\s*/);
          return items.map(item => item.trim());
      default:
          return value;
  }
}

export function parseCommentMeta(code: string): DemoMeta{
  const results = parse(code)
  const meta = results.reduce((meta, result) => {
    const {description, tags} = result
    if(description.includes('docs')){
      const thisMeta: Record<string, any> = {}
      tags.forEach(t => {
        if(t.tag === 'param'){
          const key = t.name
          thisMeta[key] = parseCommentTagValue(t.type, t.description)
        }
      })
      return Object.assign({}, meta, thisMeta)
    }
    return meta
  }, {} as DemoMeta)
  return meta
}
