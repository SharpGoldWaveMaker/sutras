import type { PObjReal } from './data-preview';
import type { DGetSetter } from './data';
export * from './value';
export * from './data';
export * from './data-preview';
export type ConsoleTypeBasic = 'warn' | 'info' | 'debug' | 'error' | 'output' | 'log';
export type ConsoleItemData = PObjReal['']['@value'] | DGetSetter;
