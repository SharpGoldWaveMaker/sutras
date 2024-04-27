const types = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,

  Int16Array,
  Uint16Array,

  Int32Array,
  Uint32Array,

  Float32Array,
  Float64Array
]

// eslint-disable-next-line n/no-unsupported-features/es-builtins
if (typeof BigInt64Array !== "undefined") {
  types.push(
    // eslint-disable-next-line n/no-unsupported-features/es-builtins
    BigInt64Array as unknown as typeof Float64Array,
    // eslint-disable-next-line n/no-unsupported-features/es-builtins
    BigUint64Array as unknown as typeof Float64Array
  )
}

export type TypedArray = typeof types[0]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isTypedArray(arr: any): arr is TypedArray {
  return types.some((item) => arr instanceof item)
}
