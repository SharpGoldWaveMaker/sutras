export function hackConsole() {
  const original = console.warn

  const ignoresTags = [
    'Feature flags __VUE_OPTIONS_API__, __VUE_PROD_DEVTOOLS__, __VUE_PROD_HYDRATION_MISMATCH_DETAILS__',
    'An iframe which has both allow-scripts and allow-same-origin',
  ]
  const ignorePattern = new RegExp(
    ignoresTags
      .map(tag => tag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|'),
    'i',
  )

  console.warn = (...args) => {
    const shouldIgnore = args.some(
      arg => typeof arg === 'string' && ignorePattern.test(arg),
    )
    debugger
    if (shouldIgnore)
      return

    original(...args)
  }
}
