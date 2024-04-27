import { defineConfig } from 'bumpp'

export default defineConfig({
  files: [
    'package.json',
    'plugins/*/package.json',
    'docs/package.json',
    'shared/package.json',
    'ui/package.json',
  ],
})
