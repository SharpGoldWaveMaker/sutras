import { 
    DemoContext, 
    pascalCase, 
    mergeImportMap,
    SourceFile,
    ResolvedConfig,
    SFCParseResult,
    DemoConfig,
    DemoToken,
    DemoContextBasic,
    DemoMeta,
    TSParseResult
 } from "@sgwm-sutras/shared";
 import { relative, dirname } from "path";
 import { parseImportMap } from "./import";
import { Page } from "../page";


export function parseDemoContext(file: SourceFile, token: DemoToken,  page: Page, config: ResolvedConfig): DemoContext {
  const files = []
  const context = {
    package: token.package,
    component: token.component,
    entry: token.path,
    page: {
      frontmatter: page.frontmatter
    },
  } as Omit<DemoContextBasic, 'meta'>
  const entryFile = parseDemoFile(file, page)
  files.push(entryFile)

  let importMap = mergeImportMap(entryFile.importMap, config.importMap || {})
  file.includes?.forEach((file: SourceFile) => {
    const includedFile = parseDemoFile(file, page)
    importMap = mergeImportMap(importMap, includedFile.importMap)
    files.push(includedFile)
  })
    
  return {
    identifier: entryFile.identifier,
    package: token.package,
    component: token.component,
    entry: token.path,
    page: {
      frontmatter: page.frontmatter
    },
    meta: parseDemoMeta(config, file, context),
    files,
    importMap: mergeImportMap(importMap, config.importMap || {}),
    site: {
      assetsDir: config.assetsDir,
      base: config.base
    }
  }
}

function parseDemoFile(file: SourceFile, page: Page){
  let importMap = parseImportMap(file, page.path)
  const {filepath, includes, ...rest} = file
  let path = relative(dirname(page.path), filepath)
  if(!path.startsWith('./') || !path.startsWith('../')){
    path = `./${path}`
  }
  const identifier = pascalCase(path)
  return {
    identifier,
    path,
    importMap,
    filename: rest.filename,
    extension: rest.extension,
    code: encodeURIComponent(rest.code),
    isEntry: rest.isEntry,
    pathFromEntry: rest.pathFromEntry,
    parsed: encodeURIComponent(JSON.stringify(rest.parsed)),
  }
}


function parseDemoMeta(config: ResolvedConfig, file: SourceFile, context: Omit<DemoContextBasic, 'meta'>): DemoMeta {
  let meta = Object.assign({}, file.parsed.docMeta || {})
  let demoConfig: DemoMeta = {}
  if(config.demo){
    demoConfig = Object.keys(config.demo).reduce((conf, k) => {
      const key = k as keyof DemoConfig
      const value = config.demo![key] as any
      if(typeof value === 'function'){
        conf[key] = value({...context, meta})
      }else{
        conf[key] = value
      }
      return conf
    }, {} as DemoConfig)
  }

  return Object.assign({
    defaultPreviewMode: file.extension === '.vue' ? 'block' : 'terminal'
  }, demoConfig || {}, meta || {})
}


