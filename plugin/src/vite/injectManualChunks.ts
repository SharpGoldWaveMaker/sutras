import type { UserConfig } from 'vite'
import type { ResolvedConfig } from '@sgwm-sutras/shared'

export function injectManualChunks(userConfig: UserConfig, config: ResolvedConfig) {
  let outputs = userConfig?.build?.rollupOptions?.output
  function createSplitLibChunk(){
      return (id: string) => {
          // const pkg = config.packages?.find(p => p.resolvedPath && p.resolvedPath === id)
          // return pkg?.name
          // if(id === '@sgwm-sutras/console'){
          //   return 'sutras-console'
          // }
      };
  }
  if (outputs) {
    outputs = Array.isArray(outputs) ? outputs : [outputs]
    for (const output of outputs) {
      output.minifyInternalExports = false
      const viteManualChunks = createSplitLibChunk()
      if (viteManualChunks) {
        if (output.manualChunks) {
          if (typeof output.manualChunks === 'function') {
            const userManualChunks = output.manualChunks
            output.manualChunks = (id, api) => {
              return viteManualChunks(id) // userManualChunks(id, api) ?? 
            }
          } else {
            // else, leave the object form of manualChunks untouched, as
            // we can't safely replicate rollup handling.
            // eslint-disable-next-line no-console
            console.warn(
              "(!) the `splitVendorChunk` plugin doesn't have any effect when using the object form of `build.rollupOptions.output.manualChunks`. Consider using the function form instead.",
            )
          }
        } else {
          output.manualChunks = viteManualChunks
        }
      }
    }
  }
}
