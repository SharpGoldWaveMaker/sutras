import { LRUCache } from 'lru-cache';
import { format } from 'prettier/standalone'
import { transform } from 'sucrase'


const cache = new LRUCache<string, string>({ max: 1024 });

export async function transformTS(rawContent: string): Promise<string> {
  if (!rawContent) {
    return '';
  }
  const cached = cache.get(rawContent)
  if(cached){
    return cached
  }

  const leading = rawContent.match(/^\s*/)?.[0] || ''; // 获取开头的空白字符
  const trailing = rawContent.match(/\s*$/)?.[0] || ''; // 获取结尾的空白字符

  let result = transform(rawContent, {
    transforms: [
      'typescript'
    ]
  }).code

  // result = await formatterCode(result!)

  result = `${leading}${result}${trailing}`

  cache.set(rawContent, result)

  return result
};



export async function formatterCode(code: string){
    let result = ''
    try {
        result = await format(code, {
            parser: "typescript", // 指定使用的解析器
        })
    }catch(error){
        if (error instanceof Error) {
            console.error('格式化时遇到错误', error.message);
          } else {
            console.error('格式化时遇到错误', error);
          }
    }
    return result
}
