export type PackageOption = {
  /**
   * @name 包名
   * @description package.json 中的 name 项
   */
    name: string
    path: string
    /**
     * @name 包名
     * @description package.json 中的 name 项
     */
    alias?: string | string[]
}

export const IGNORE_ALIAS_NAMES = ['.']

export class Package {
    public readonly name: PackageOption['name']
    public readonly _path: PackageOption['path']
    public readonly alias: string[]
    public readonly resolvedPath?: string
    constructor(
       option: PackageOption
    ){
        this.name = option.name
        this._path = option.path
        if(option.alias){
            const tryAlias = Array.isArray(option.alias) ? new Set(option.alias) : new Set([option.alias])
            this.alias = Array.from(tryAlias).filter(alia => Boolean(alia) && ![option.name, ...IGNORE_ALIAS_NAMES].includes(alia))
        }else {
            this.alias = []
        }
        
    }
    get path(){
        return this.resolvedPath ?? this._path
    }

    hasSamePath(pkg: PackageOption){
        return this.path === pkg.path
    }

    static checkPackages(packages: Package[]){
        const nameMap = new Map<string, string>()
        const aliasMap = new Map<string, string>()
        packages.forEach(p => {
            const _path = nameMap.get(p.name)
            if(_path){
                throw Error(`package name conflict! ${p.path} ${_path} `)
            }
            nameMap.set(p.name, p.path)
            if(Array.isArray(p.alias)){
                p.alias.forEach(alias => {
                    const _path = aliasMap.get(alias)
                    if(_path){
                        console.warn(`package alias conflict! ${p.path} ${_path}`)
                    } else {
                        aliasMap.set(alias, p.path)
                    }
                })
            } else {
                const _path = aliasMap.get(p.alias!)
                if(_path){
                    console.warn(`package alias conflict! ${p.path} ${_path}`)
                }else{
                    aliasMap.set(p.alias!, p.path)
                }
            }
        })
    }
}