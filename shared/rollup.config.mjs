// @ts-check
import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { visualizer } from 'rollup-plugin-visualizer';

const entries = [
  'src/index.ts'
]
const external = [
  '@vue/compiler-sfc',
  '@vue/runtime-core',
  'typescript'
]

const plugins = [
  esbuild(),
  nodeResolve(),
  commonjs(),
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
