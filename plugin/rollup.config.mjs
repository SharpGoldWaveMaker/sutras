// @ts-check
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import json from '@rollup/plugin-json'
import { visualizer } from 'rollup-plugin-visualizer'

const entries = [
  'src/index.ts',
]
const external = [
  '@vue/compiler-sfc',
  '@sgwm-sutras/console',
  'markdown-it',
  'markdown-it-container',
  '@sgwm-sutras/shared',
  'vue',
]

const plugins = [
  esbuild(),
  nodeResolve(),
  commonjs({
    include: /node_modules/,
  }),
  json({
    namedExports: false,
    preferConst: true,
    compact: true,
  }),
  visualizer({ open: true, filename: './bundle-analysis.html' }),
]

export default defineConfig([
  {
    input: entries,
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: () => {
        return '[name].mjs'
      },
      chunkFileNames: 'chunks/[name].mjs',
    },
    plugins: [
      ...plugins,
    ],
    external,
    treeshake: true,
  },
  {
    input: entries,
    output: {
      dir: 'dist',
      format: 'esm',
      chunkFileNames: 'types/[name].d.mts',
      entryFileNames: f => `${f.name.replace(/src[\\\/]/, '')}.d.mts`,
    },
    plugins: [
      dts({
        // respectExternal: true,
      }),
    ],
    external,
    onwarn: (warning, warn) => {
      if (!/Circular|an empty chunk/.test(warning.message))
        warn(warning)
    },
  },
])
