import {
  RenderArray,
  RenderBasic,
  RenderCollection,
  RenderDefault,
  RenderElement,
  RenderError,
  RenderFunction,
  RenderObject,
  RenderPromise,
  RenderRegExp,
} from '../renders'

import type { EncodeTypeResult } from '../core/encode'

const componentMap = {
  string: RenderBasic,
  number: RenderBasic,
  bint: RenderBasic,
  symbol: RenderBasic,
  nill: RenderBasic,
  function: RenderFunction,
  collection: RenderCollection,
  object: RenderObject,
  error: RenderError,
  regexp: RenderRegExp,
  array: RenderArray,
  typedarray: RenderArray,
  element: RenderElement,
  date: RenderPromise,
  promise: RenderPromise,
  buffer: RenderPromise, // Ensure this is correct, previously was a mistake
  dataview: RenderPromise,
}

export function useValueRender(data: EncodeTypeResult) {
  return componentMap[data['@t']] || RenderDefault
}
