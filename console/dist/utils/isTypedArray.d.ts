declare const types: (Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor)[];
export type TypedArray = typeof types[0];
export declare function isTypedArray(arr: any): arr is TypedArray;
export {};
