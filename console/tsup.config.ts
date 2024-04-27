import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    runtime: './src/core/index.ts',
  },
  splitting: true,
  format: ['esm'],
  target: 'esnext',
  dts: true,
  metafile: false,
  external: ['vue'],
  treeshake: true,
})
