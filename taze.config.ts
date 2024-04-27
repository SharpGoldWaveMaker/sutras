import { defineConfig } from 'taze'

export default defineConfig({
  ignorePaths: [
    '**/node_modules/**',
  ],
  packageMode: {
    'vitepress': 'latest',
    'vue': 'latest'
  },
})
