import type { FunctionalComponent, SlotsType } from 'vue'
import type { ConsoleItemData } from '../definition'

export interface RenderProps {
  data: ConsoleItemData
  flat?: boolean
  isLog?: boolean
}

export type RenderSlots = SlotsType<{
  default: any
}>

export type RenderFunction = FunctionalComponent<RenderProps, RenderSlots>
