import path from 'node:path'
import type { Package as RawPackage } from '@manypkg/get-packages'
import { getPackagesSync as getRawPackagesSync } from '@manypkg/get-packages'
import type { ResolvedConfig } from '@sgwm-sutras/shared'
import { Package } from '@sgwm-sutras/shared'

export function getPackages(config: ResolvedConfig): Package[] {
  const defaultPkgs = getDefaultPackages(config.root)

  if (!config.packages)
    return defaultPkgs

  const normalizePkgs: Package[] = []

  config.packages.forEach((uPkg) => {
    if (!uPkg.path)
      throw new Error(`[sutras package checker] path is required! ${uPkg.name}`)

    const existIdx = defaultPkgs.findIndex(p => p.hasSamePath(uPkg))

    if (existIdx > -1) {
      const mergedPkg = defaultPkgs[existIdx]
      const option = {
        name: uPkg.name,
        path: uPkg.path,
        alias: uPkg.alias || mergedPkg.alias,
      }
      normalizePkgs.push(new Package(option))
      defaultPkgs.splice(existIdx, 1)
      return
    }
    normalizePkgs.push(new Package(uPkg))
  })

  const mergedPkgs = [...normalizePkgs, ...defaultPkgs]

  Package.checkPackages(mergedPkgs)

  return mergedPkgs
}

export function getDefaultPackages(root: string) {
  const { packages } = getRawPackagesSync(root)
  return packages.reduce((pkgs: Package[], pkg: RawPackage) => {
    const name = pkg.packageJson.name
    const alias = new Set([path.parse(pkg.dir).name, pkg.relativeDir].filter(alia => Boolean(alia) && ![name, '.'].includes(alia)))
    const option = {
      name,
      path: pkg.dir,
      alias: Array.from(alias),
    }
    pkgs.push(new Package(option))
    return pkgs
  }, [])
}

export function getPackageConfig(packages: Package[], pkgName?: string) {
  if (!pkgName && packages.length === 1)
    return packages[0]

  if (pkgName) {
    const pkg = packages.find(p => [p.name, ...(p.alias! as string[])].includes(pkgName))
    if (!pkg)
      throw new Error(`package ${pkgName} not registered`)

    return pkg
  }
}
