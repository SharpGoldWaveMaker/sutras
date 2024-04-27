export class LinkStore {
  private linkMap: Map<string, any>
  private max: number | null
  private accessOrder: string[] // 用于跟踪访问顺序
  private count: number = 0 // 自增计数器

  constructor(max: number | null = null) {
    this.linkMap = new Map<string, any>()
    this.max = max
    this.accessOrder = []
  }

  clear(){
    this.linkMap.clear()
    this.accessOrder.splice(0)
    this.count = 0
  }

  set(obj: object): string {
    this.count += 1
    const key = `key-${this.count}`
    this.linkMap.set(key, obj)
    this.accessOrder.push(key)

    // 如果设置了max并且达到上限，则执行淘汰策略
    if (this.max !== null && this.linkMap.size > this.max)
      this.evict()

    return key
  }

  get(key: string): object | undefined {
    const item = this.linkMap.get(key)
    if (item && this.max !== null)
      this.moveToFront(key)

    return item
  }

  query(obj: object): string | undefined {
    for (const [key, value] of this.linkMap.entries()) {
      if (Object.is(value, obj)) {
        if (this.max !== null)
          this.moveToFront(key)

        return key
      }
    }
    return undefined
  }

  private evict() {
    const oldestKey = this.accessOrder.shift()
    if (oldestKey !== undefined)
      this.linkMap.delete(oldestKey)
  }

  private moveToFront(key: string) {
    const index = this.accessOrder.indexOf(key)
    if (index > -1) {
      this.accessOrder.splice(index, 1)
      this.accessOrder.push(key)
    }
  }
}
