import { find, browserPath } from '../utils'
import { File, FileExtension } from './types'

const { join, dirname } = browserPath

export function findEntryFile(files: File[]){
    return find(files, 'isEntry')
}

export function langFromExtension(extension: FileExtension){
    return extension.startsWith('.') ? extension.slice(1) : extension
}

export function isRelativeSourcePath(source: string){
  return source.startsWith('./') || source.startsWith('../')
}

export function findLocalFile(source: string, file: File, files: File[]){
  const isRelativeSource = isRelativeSourcePath(source)
  if(!isRelativeSource){
      return null
  }
  const relativePath = `.${join(dirname(file.pathFromEntry), source)}`
  return find(files, f => {
    return f.pathFromEntry.startsWith(relativePath) && (
      f.pathFromEntry === relativePath ||
      f.pathFromEntry.startsWith(`${relativePath}.`) || 
      f.pathFromEntry.startsWith(`${relativePath}/index.`)
    )
  })
}