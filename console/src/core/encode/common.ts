import type { DObjReal, DRecord } from '../../definition'

export function createRealItem<T>(value: T, hidden = false) {
  return {
    '@hidden': hidden,
    '@value': value,
  }
}

export function createFakeRecord<T extends DObjReal>(
  value: T,
  name: string | null = null,
): DRecord {
  return {
    '@t': 'object',
    '@name': name,
    '@first': false,
    '@real': value,
    '@des': null,
  }
}
