import { transformTS } from "../transform"
import { compileSFC } from './sfc'
import {LRUCache} from 'lru-cache'
import type { FileCompiled, File } from '../types'
import { CACHE_MAX_FILE } from "../../config"

const cache = new LRUCache<string, FileCompiled>({ max: CACHE_MAX_FILE });

export async function compileFile(file: File, useCache: boolean = true): Promise<CompileResult>{
    if(!file.code.trim()){
        return []
    }

    if(useCache){
      const cached = cache.get(file.code);
      if (cached) {
        file.compiled = cached
        return []
      }
    }

    if(file.isCSS){
      return compileCSSFile(file)
    }

    if(file.isJS){
      return compileJSFile(file)
    }

    if(file.isTS){
      return await compileTSFile(file)
    }

    if (file.isJSON) {
      return compileJSONFile(file)
    }

    if(!file.isSFC){
      return [new Error(`file type ${file.extension} is not support`)]
    }

    return await compileSFC(file)
}


function compileCSSFile(file: File): CompileResult {
  file.compiled = {
    css: file.code
  }
  return []
}

function compileJSFile(file: File): CompileResult {
  file.compiled = {
    js: file.code,
    ssr: file.code,
    css: ''
  }
  return []
}

async function compileTSFile(file: File): Promise<CompileResult> {
  const code = await transformTS(file.code)
  file.compiled = {
    js: code,
    ssr: code,
    css: ''
  }
  return []
}

function compileJSONFile(file: File): CompileResult {
  let parsed
  try {
    parsed = JSON.parse(file.code)
  } catch (err: any) {
    console.error(`Error parsing ${file.filename}`, err.message)
    return [err.message]
  }
  const code = `export default ${JSON.stringify(parsed)}`
  file.compiled = {
    js: code,
    ssr: code
  }
  return []
}


export type CompileOption = {
  file: File,
  useCache?: boolean
}

export type CompileResult = Error[]