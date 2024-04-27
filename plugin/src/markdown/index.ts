import type MarkdownIt from 'markdown-it'
import Container from 'markdown-it-container'
import { transform } from './transform.js';

export const pluginMkit = (md: MarkdownIt) => {
    md.use(Container, 'demo', {
        validate(params: string) {
            return !!params.trim().match(/^demo\s*(.*)$/);
        },
        render(tokens: MarkdownIt.Token[], idx: number){
            if (tokens[idx].nesting === 1) {
              const result = transform(md, tokens[idx]);
              // console.log(result)
              return result
            } else {
              return ''
            }
        }
    })
};
  