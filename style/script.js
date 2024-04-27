import { copy } from 'fs-extra'
import fg from 'fast-glob'

function toDest(file) {
  return file.replace(/^src\//, 'dist/')
}

fg.sync('src/scss/**').forEach((file) => {
  copy(file, toDest(file))
})
