import fixturez from 'fixturez'
import { findRootSync } from '@manypkg/find-root'
import { test} from 'vitest'
import { getPluginConfig } from '../config'
import { ResolvedConfig } from 'vite'
import { createPathMatcher } from './path'
// 获取当前模块文件的路径

const {rootDir} = findRootSync(process.cwd())

const f = fixturez(rootDir)

test("test basic", async () => {
    let tmpPath = f.copy('basic')
    const config = await getPluginConfig({root: tmpPath} as ResolvedConfig, {})
    config.demoDirname = 'demos'
    const matcher = createPathMatcher(config)
})

test("test monorepo", async () => {
    // let tmpPath = f.copy('monorepo')
    // const files = matchMemoFile({}, config)
    // console.log('files', files)
})

test("test complex", async () => {
    // let tmpPath = f.copy('complex')
    // const files = matchMemoFile({}, config)
    // console.log('files', files)
})
