import { useNamespace } from '@sgwm-sutras/style'
import type { PropType } from 'vue'
import { defineComponent, reactive, ref } from 'vue'
import ConsoleBlock from '../../layouts/console-block'
import ConsoleContent from '../console-content'
import LocationConsole from '../console-location'
import ConsoleValueStatic from '../console-value-static'
import './style.scss'
import type { EncodeTableResult } from '../../core/encode'

enum StateSorter {
  ASC = 'asc',
  DESC = 'desc',
}
type SortKey = string | typeof KEY_INDEX
type SortState = Record<SortKey, StateSorter.ASC | StateSorter.DESC | undefined>

const MAX_COUNT_COLDS = 20

const KEY_INDEX = Symbol('(index)')

const ConsoleTable = defineComponent({
  name: 'ConsoleTable',
  inheritAttrs: false,
  props: {
    data: {
      type: Object as PropType<EncodeTableResult>,
      required: true,
    },
  },
  setup(props) {
    const ns = useNamespace('console-table')
    const sorters = reactive<Partial<SortState>>({})
    const usedSorter = ref<SortKey>(KEY_INDEX)

    function changeSorter(name: string | typeof KEY_INDEX) {
      switch (sorters[name]) {
        case undefined:
          sorters[name] = StateSorter.ASC
          break
        case StateSorter.ASC:
          sorters[name] = StateSorter.DESC
          break
        case StateSorter.DESC:
          delete sorters[name]
          break
      }
      usedSorter.value = name
    }

    function sortTable(table: EncodeTableResult['table']) {
      const sortBy = sorters[usedSorter.value]

      if (sortBy === undefined)
        return Object.entries(table)

      if (usedSorter.value === KEY_INDEX) {
        return Object.entries(table).sort((a, b) => {
          return (
            (sortBy === StateSorter.ASC ? 1 : -1)
            * (a[0].charCodeAt(0) - b[0].charCodeAt(0))
          )
        })
      }

      return Object.entries(table).sort((a, b) => {
        const valA = (a[1][usedSorter.value as never] as unknown as never)?.['@value'] as string | undefined
        const valB = (b[1][usedSorter.value as never] as unknown as never)?.['@value'] as string | undefined
        const isNum = valA && valB && !Number.isNaN(+valA) && !Number.isNaN(+valB)

        if (isNum)
          return (sortBy === StateSorter.ASC ? 1 : -1) * (+valA - +valB)

        return (
          (sortBy === StateSorter.ASC ? 1 : -1)
          * ((valA as string)?.charCodeAt(0) - (valB as string)?.charCodeAt(0))
        )
      })
    }

    return () => {
      const location = props.data['@location']
      const collapse = props.data['@collapse']
      return (
        <ConsoleBlock class={ns.b()}>
          {{
            extra: () => location && (
              <LocationConsole
                location={location}
              />
            ),
            default: () => [
              <table class={ns.e('table')}>
                <tr>
                  <th onClick={() => changeSorter(KEY_INDEX as any)}>(Index)</th>
                  {props.data.cols.slice(0, MAX_COUNT_COLDS).map(name => (
                    <th key={name} onClick={() => changeSorter(name)}>
                      {name}
                    </th>
                  ))}
                </tr>
                {sortTable(props.data.table).map(([name, row]) => (
                  <tr key={name}>
                    <th>{name}</th>
                    {props.data.cols.slice(0, MAX_COUNT_COLDS).map(colName => (
                      <td key={colName}>
                        { row[colName]
                        && (
                          <ConsoleValueStatic
                            hide-name-object
                            data={row[colName]}
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </table>,
              collapse
              && (
                <ConsoleContent
                  data={collapse}
                />
              ),
            ],
          }}
        </ConsoleBlock>
      )
    }
  },
})

export default ConsoleTable
