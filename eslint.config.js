import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  typescript: {
    overrides: {
      'n/prefer-global/process': ['error', 'always'],
    },
  },
})
