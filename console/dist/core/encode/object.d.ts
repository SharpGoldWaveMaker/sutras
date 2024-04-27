import type { DRecord, DTypedArray, PObjReal } from '../../definition';
import type { EncodeOption, EncoderType } from './types';
export declare const encodeFunction: EncoderType;
export declare function encodeTypedArray(data: any, opt: any): DRecord | DTypedArray;
export declare const encodeCollection: EncoderType;
export declare const encodeBuffer: EncoderType;
export declare const encodeDataView: EncoderType;
export declare const encodePromise: EncoderType;
export declare const encodeDOM: EncoderType;
export declare const encodeObject: EncoderType;
export declare function createPreviewObject(data: object, opt: Partial<EncodeOption>, extendsPropertyDescriptors?: Record<string, PropertyDescriptor>): {
    '@value': PObjReal;
    '@lastKey': string;
};
export declare function createPreviewValue(value: unknown, opt: Partial<EncodeOption>): PObjReal['']['@value'];
