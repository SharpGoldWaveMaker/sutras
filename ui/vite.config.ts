import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import svg from 'vite-svg-loader'
import { analyzer } from 'vite-bundle-analyzer'
import windiCSS from 'vite-plugin-windicss'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const ROOT = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(ROOT, '..', p)

const external = [
  ...Object.keys(pkg.dependencies),
  'vue',
]

export default defineConfig({
  resolve: {
    alias: {
      '@': r('src'),
    }
  },
  build: {
    lib: {
      entry: r('src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@sgwm-sutras/style/dist/scss" as *;
@import "@/style/vars.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    vuejsx(),
    svg(),
    dts(),
    analyzer(),
    windiCSS(),
  ],
})
