import path from "path";
import { globSync } from 'glob'
import { flatMap, DemoToken, ResolvedConfig } from '@sgwm-sutras/shared'
import { getPackageConfig } from '../package'
import { supportDemoEntryExts } from "./token";

export function createPathMatcher(config: ResolvedConfig){
    
    return (token: DemoToken) => {
        let matchRules
        if(token.local){
            matchRules = getLocalMatchRules(token)
        } else {
            matchRules = getRemoteMatchRules(token, config)
        }
        const matched = globSync(matchRules, {windowsPathsNoEscape: true}).map((p: string) => p.replace(/\\/g, '/'))
        if(!matched?.length){
            throw Error(`Unable to match any demos!`)
        }
        checkMatchedPaths(matched, token.path)
        return matched
    }
}


function getLocalMatchRules(token: DemoToken){
    const basePath = path.dirname(token._basepath)
    if(token.isDir){
        return getDirtMatchRules(basePath, token.path)
    } else {
        return getFileMatchRules(basePath, token.path)
    }
}


function getRemoteMatchRules(token: DemoToken, config: ResolvedConfig){
    const demoDirname = config.demoDirname
    let pkgConfig
    if(!token.package){
        if(config.packages?.length === 1){
            pkgConfig = config.packages[0]
        } else if(config.useDocPath){
            const pkgName = path.basename(path.dirname(token._basepath))
            pkgConfig = getPackageConfig(config.packages!, pkgName)
        }
    } else {
        pkgConfig = getPackageConfig(config.packages!, token.package)
    }
    if(!pkgConfig){
        throw Error(`package not specified! ${token.path}`)
    }
       
    let component
    if(token.component){
        component = token.component
    } else if(config.useDocPath){
        component = path.parse(token._basepath).name
    } else {
        throw Error(`component not specified! ${token.path}`)
    }
    const basePaths = [
        `${pkgConfig.path}/**/${demoDirname}/**/${component}/**/`,
        `${pkgConfig.path}/**/${component}/**/${demoDirname}/**/`
    ]
    const getMatchRules = (getter:MatchRulesGetter) => flatMap(basePaths, (basePath: string) => getter(basePath, token.path))
    if(token.isDir){
        return getMatchRules(getDirtMatchRules)
    } else {
        return getMatchRules(getFileMatchRules)
    }
}

type MatchRulesGetter = (base: string, token: string) => string[]


function getExtRules(){
  return `{${supportDemoEntryExts.join(',')}}`
}

function getFileMatchRules(basePath: string, name: string){
    if(path.extname(name)?.length > 0){
        return [
            path.join(basePath, name)
        ]
    }
    return [
        path.join(basePath, `${name}.${getExtRules()}`),
        path.join(basePath, name, `index.${getExtRules()}`)
    ]
}

function getDirtMatchRules(basePath: string, name: string){
    return [
        path.join(basePath, `${name}.${getExtRules()}`),
        path.join(basePath, name, `index.${getExtRules()}`)
    ]
}


function checkMatchedPaths(paths: string[], demoName: string){
    let index: number
    let target: string
    paths.forEach(_path => {
        const demoIndex = _path.indexOf(demoName)
        if(!index){
            index = demoIndex
            target = _path
        }
        if(demoIndex !== index){
            throw Error(`Matched multiple demos: ${target} ${_path}`)
        }
    })
}