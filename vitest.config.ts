import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(),
  ],
  test: {
    exclude: [
      '**/node_modules/**',
    ],
    coverage: {
      provider: 'v8',
      include: [
        '**/docs/**/*.ts',
        '**/plugins/**/src/*.ts',
        '**/shared/src/*.ts',
        '**/ui/src/*.ts',
      ],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/scripts/**'
      ],
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
})
