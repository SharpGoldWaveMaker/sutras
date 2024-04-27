// @ts-check
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { string } from 'rollup-plugin-string';
import { visualizer } from 'rollup-plugin-visualizer';
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const entries = [
  'src/index.ts'
]
const external = [
  ...Object.keys(pkg.dependencies),
]

const plugins = [
  esbuild(),
  nodeResolve(),
  commonjs(),
  string({
    include: "**/*.html",
  }),
  visualizer({ open: true, filename: './bundle-analysis.html' }),
]

// @ts-ignore
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
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      ...plugins,
    ],
    external,
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
      })
    ],
    external,
    onwarn: (warning, warn) => {
      if (!/Circular|an empty chunk/.test(warning.message))
        warn(warning)
    },
  },
])
