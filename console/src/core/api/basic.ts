import { shallowReactive } from 'vue'
import type { EncodeResult, EncodeTableResult } from '../encode'
import { isTable } from '../encode/utils'
import type { ConsoleItemValue, GroupData, LogData } from './types'
import { isGroup } from './utils'

type BasicType = 'warn' | 'info' | 'debug' | 'error' | 'log'

export class ConsoleApi {
  public readonly values: ConsoleItemValue[] = shallowReactive([])
  private lastItem: ConsoleItemValue

  constructor() {}

  private isEqualData(target: ConsoleItemValue | null, type: BasicType, data: EncodeResult[]) {
    if (
      target
      && !isGroup(target)
      && target.type === type
      && target.data.length === data.length
      && target.data.every(
        (item, index) => item['@id'] === data[index]['@id'],
      )
    )
      return true

    return false
  }

  private basicMethod(
    type: BasicType,
    ...data: EncodeResult[]
  ): void {
    if (this.isEqualData(this.lastItem, type, data)) {
      (this.lastItem as LogData).count++
    }
    else {
      this.push({
        type,
        data,
        count: 1,
      })
    }
  }

  public log(...data: EncodeResult[]): void {
    this.basicMethod('log', ...data)
  }

  public warn(...data: EncodeResult[]): void {
    this.basicMethod('warn', ...data)
  }

  public info(...data: EncodeResult[]): void {
    return this.basicMethod('info', ...data)
  }

  public debug(...data: EncodeResult[]): void {
    return this.basicMethod('debug', ...data)
  }

  public error(...data: EncodeResult[]): void {
    return this.basicMethod('error', ...data)
  }

  public table(
    data: EncodeTableResult,
  ): void {
    if (isTable(data)) {
      this.push({
        type: 'table',
        data,
      })
    }
  }

  private push(data: ConsoleItemValue): void {
    if (!this.lastItem || !isGroup(this.lastItem)) {
      this.lastItem = data
      this.values.push(data)
      return
    }

    if (this.lastItem['@end']) {
      this.lastItem = data
      this.values.push(data)
      return
    }

    const group = this.findLastActiveGroup(this.lastItem as GroupData)
    group['@items'].push(data)
  }

  private findLastActiveGroup(root: GroupData): GroupData {
    const last = root['@items'][root['@items'].length - 1]
    if (last && isGroup(last) && !last['@end'])
      return this.findLastActiveGroup(last)
    return root
  }

  public group(
    key: EncodeResult,
  ): void {
    this.push({
      '@key': key,
      '@items': shallowReactive([]),
      '@end': false,
      '@collapse': false,
    })
  }

  public groupCollapsed(
    key: EncodeResult,
  ): void {
    this.push({
      '@key': key,
      '@items': shallowReactive([]),
      '@end': false,
      '@collapse': true,
    })
  }

  public groupEnd(): void {
    if (isGroup(this.lastItem) && !this.lastItem['@end']) {
      const group = this.findLastActiveGroup(this.lastItem)
      group['@end'] = true
    }
  }

  public clear(): void {
    this.lastItem = null
    this.values.splice(0)
  }
}
