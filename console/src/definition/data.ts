import type { getHeaderFn } from '../core/getHeaderFn'
import type { PObjReal } from './data-preview'

export interface DLink {
  readonly '@t': 'link'
  readonly '@type': 'object' | 'function'
  readonly '@link': string
  readonly '@name': string | null
}

export interface DString {
  readonly '@t': 'string'
  '@first': boolean
  '@value': string
}

export interface DNumber {
  readonly '@t': 'number'
  readonly '@value': string
}

export interface DBigInt {
  readonly '@t': 'bint'
  readonly '@value': string
}

export interface DSymbol {
  readonly '@t': 'symbol'
  readonly '@value': string
}

export interface DNill {
  readonly '@t': 'nill'
  readonly '@value': 'null' | 'undefined'
}

export interface DFunction {
  readonly '@t': 'function'
  readonly '@first': boolean
  readonly '@header': ReturnType<typeof getHeaderFn>
  readonly '@code': string
  readonly '@real': DLink | null
}

export interface DCollection extends Omit<DRecord, '@t' | '@des' | '@first' | '@real'> {
  readonly '@t': 'collection'
  readonly '@name': 'map' | 'weakmap' | 'set' | 'weakset'
  readonly '@size': number | null
  readonly '@entries': unknown
  readonly '@real': DLink
}

export interface DRegExp extends Omit<DRecord, '@t' | '@de' | '@real' | '@des'> {
  readonly '@t': 'regexp'
  readonly '@flags': string
  readonly '@source': string
  readonly '@real': DLink | null
}

export interface DGetSetter {
  readonly '@t': 'gs'
  readonly '@value': DLink
  readonly '@at': Partial<{
    [name in 'get' | 'set']: DFunction
  }>
}

export interface DObjReal {
  readonly [name: string]: RealItem<
    | DGetSetter
    | string
    | number
    | bigint
    | symbol
    | DFunction
    | DCollection
    | RegExp

    | DRecord
    | DNill
    // | Link
    | DError
    | DArray
    | DElement
    | DPromise
    | Date
    | DTypedArray
    | DBuffer
    | DataView
  >
}

export interface DRecord {
  readonly '@t': 'object'
  readonly '@name': string | null
  readonly '@first': boolean
  readonly '@real': DObjReal | DLink
  readonly '@des': {

    readonly '@value': PObjReal
    readonly '@lastKey': string
  } | null
}
export interface DError {
  readonly '@t': 'error'
  readonly '@first': boolean
  readonly '@stack': string // use
  readonly '@real': DLink | null // use
}
export interface DArray extends Pick<DRecord, '@des'> {
  readonly '@t': 'array'
  readonly '@size': number
  readonly '@name': string | null
  readonly '@first': boolean
  readonly '@real': DLink
}
export type DArrayReal = DObjReal & {
  readonly length: RealItem<number>
}
export interface DElement {
  readonly '@t': 'element'
  readonly '@name': string
  readonly '@first': boolean
  readonly '@attrs'?: [string, string][]
  readonly '@real': DLink | null
  readonly '@childs'?: string | null | DLink
}
export interface DPromise {
  readonly '@t': 'promise'
  readonly '@first': boolean
  readonly '@state': 'pending' | 'fulfilled' | 'rejected'
  readonly '@real': DLink
  readonly '@des': Exclude<DRecord['@des'], null>
}
export interface DDate extends Pick<DRecord, '@des'> {
  readonly '@t': 'date'
  readonly '@first': boolean
  readonly '@value': string
  readonly '@real': DLink | null
}
export interface DTypedArray extends Omit<DArray, '@t'> {
  readonly '@t': 'typedarray'
  readonly '@real': DLink
}
export type DTypedArrayReal = DArrayReal & {
  readonly buffer: RealItem<DBuffer>
  readonly byteLength: RealItem<number>
  readonly byteOffset: RealItem<number>
  readonly [Symbol.toStringTag]: RealItem<string>
}
export interface DBuffer extends Omit<DArray, '@t' | '@des' | '@real'> {
  readonly '@t': 'buffer'
  readonly '@real': DLink
}
export type DBufferReal = DObjReal & {
  readonly 'byteLength': RealItem<number>
  readonly '[[Int8Array]]': RealItem<DTypedArray>
  readonly '[[Uint8Array]]': RealItem<DTypedArray>

  readonly '[[Int16Array]]': RealItem<DTypedArray>
  readonly '[[Int32Array]]': RealItem<DTypedArray>

  readonly '[[ArrayBufferByteLength]]': RealItem<number>
}
export interface DDataView extends Omit<DArray, '@t' | '@des' | '@name'> {
  readonly '@t': 'dataview'
  readonly '@name': 'DataView'
  readonly '@real': DLink
}
export type DDataViewReal = DArrayReal & {
  readonly buffer: RealItem<DBuffer>
  readonly byteLength: RealItem<number>
  readonly byteOffset: RealItem<number>
}

export interface RealItem<T> {
  readonly '@hidden': boolean
  readonly '@value': T
}
