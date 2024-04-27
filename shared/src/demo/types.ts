import { DemoConfig, FileIdentifier, SourceFile,  } from "..";
import { ImportMap, SFCDocMeta } from "../file";

export type DemoToken = {
    _id: string;
    _basepath: string;
    path: string;
    isDir: boolean;
    local?: boolean
    package?: string
    component?: string
}

export type DemoGlobalConfig = {
    importMap: ImportMap
}

export type DemoFile = Omit<SourceFile, 'filepath' | 'includes'> & {
  identifier: string
  path: string
  importMap: ImportMap
}

export type DemoPage = {
  frontmatter: Record<string, any>
}

export type DemoMeta = SFCDocMeta

export type SiteConfig = {
  assetsDir: string
  base: string
}

export type DemoContext = {
  identifier: string
  package?: string
  component?: string
  entry: string,
  page: DemoPage
  meta: DemoMeta
  files: DemoFile[]
  importMap: ImportMap
  site: SiteConfig
}
