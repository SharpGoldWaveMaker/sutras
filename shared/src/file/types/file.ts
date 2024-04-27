import { tuple } from "../../utils";
import { SFCParseResult, TSParseResult } from "../parse";
import { ParseResult } from "../parse/default";


export type SourceFile = {
    /**
     * @name 文件源码路径
     */
    filepath: string;
    /**
     * @name 文件相对于入口的路径
     * @description 对应入口文件的importMap
     */
    pathFromEntry: string;
    /**
     * @name 文件名
     * @description 不带后缀
     */
    filename: FileName;
    /**
     * @name 文件源码
     */
    code: FileCode;
    /**
     * @name 文件后缀
     */
    extension: FileExtension;
    /**
     * @name 解析结果
     */
    parsed: ParseResult | SFCParseResult | TSParseResult;
    /**
     * @name 是否是入口文件
     */
    isEntry: boolean;
    /**
     * @name 包含的文件
     */
    includes?: SourceFile[];
}

/**
 * @name 文件信息
 * @description 用于管理编译状态
 */
export class File {
    public readonly identifier: FileIdentifier
    public readonly filename: FileName
    public readonly extension: FileExtension
    public readonly isEntry: boolean
    public readonly pathFromEntry: string
    public readonly parsed: SFCParseResult | TSParseResult | string
    public code: FileCode
    public compiled: FileCompiled | null
    constructor(
       option: Pick<File, 
       |'identifier'
       |'filename'
       |'extension'
       |'isEntry'
       |'pathFromEntry'
       |'code'
       |'parsed'>
    ){
        this.identifier = option.identifier
        this.filename = option.filename
        this.extension = option.extension
        this.isEntry = option.isEntry
        this.pathFromEntry = option.pathFromEntry
        this.parsed = option.parsed
        this.code = option.code
        this.compiled = null
    }

    get isJS(){
        return this.extension === '.js'
    }

    get isJSX(){
        return this.extension === '.jsx'
    }

    get isJSON(){
        return this.extension === '.json'
    }

    get isTS(){
        return this.extension === '.ts'
    }

    get isTSX(){
        return this.extension === '.tsx'
    }

    get isSFC(){
        return this.extension === '.vue'
    }

    get isCSS(){
        return this.extension === '.css'
    }

    get isHTML(){
        return this.extension === '.html'
    }
}

export type FileMap = Map<FileIdentifier, File>

export type FileIdentifier = string;

export const fileExtensions = tuple('.vue' , '.js' , '.jsx', '.ts', '.tsx', '.html' , '.css' , '.json')
export type FileExtension = (typeof fileExtensions)[number]

/**
 * @name 文件编译结果
 * @description json文件将转化成js对象
 */
export type FileCompiled = {
    js?: string;
    ssr?: string;
    css?: string;
}

/** 语义化 */
export type FileName = string
export type FileCode = string