import type { EncodeResult } from '../encode'

export interface LogData {
  readonly data: readonly EncodeResult[]
  count: number
  readonly type: 'warn' | 'info' | 'debug' | 'error' | 'output' | 'log'
}
export interface TableData {
  readonly data: EncodeResult
  readonly type: 'table'
}

export interface GroupData {
  readonly '@key': EncodeResult
  readonly '@items': (LogData | TableData | GroupData)[]
  '@end': boolean
  readonly '@collapse': boolean
}

export type ConsoleItemValue = LogData | TableData | GroupData
