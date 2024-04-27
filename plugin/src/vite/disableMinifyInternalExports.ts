import type { UserConfig } from "vite";

export function disableMinifyInternalExports(userConfig: UserConfig){
    let outputs = userConfig?.build?.rollupOptions?.output
    if(outputs){
        outputs = Array.isArray(outputs) ? outputs : [outputs]
        for (const output of outputs) {
            output.minifyInternalExports = false
        }
    }
}