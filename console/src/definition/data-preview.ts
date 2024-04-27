import type {
  DArray,
  DBigInt,
  DBuffer,
  DCollection,
  DDataView,
  DDate,
  DElement,
  DError,
  DFunction,
  DNill,
  DNumber,
  DPromise,
  DRecord,
  DRegExp,
  DString,
  DSymbol,
  DTypedArray,
  RealItem,
} from './data'

export type PRecord = Pick<DRecord, '@t' | '@name'>
export type PError = Pick<DError, '@t' | '@stack'>
export type PRegExp = Pick<DRegExp, '@t' | '@name'>
export type PCollection = Pick<DCollection, '@t' | '@name' | '@size'>
export type PArray = Pick<DArray, '@t' | '@size' | '@name'>
export type PFunction = Pick<DFunction, '@t'>
export type PElement = Pick<DElement, '@t' | '@name'>
export type PPromise = Pick<DPromise, '@t'>
export type PDate = Pick<DDate, '@t' | '@value'>
export type PTypedArray = Pick<DTypedArray, '@t' | '@size' | '@name'>
export type PBuffer = Pick<DBuffer, '@t' | '@size' | '@name'>
export type PDataView = Pick<DDataView, '@t' | '@size' | '@name'>

export interface PObjReal {
  readonly [name: string]: RealItem<
    | PRecord
    | PError
    | PRegExp
    | PCollection
    | PArray
    | PFunction
    | PElement
    | PPromise
    | PDate
    | PTypedArray
    | PBuffer
    | PDataView
    | DString
    | DNumber
    | DBigInt
    | DSymbol
    | DNill
  >
}
