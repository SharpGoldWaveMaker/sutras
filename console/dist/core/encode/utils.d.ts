export declare function printfArgs<T extends unknown[]>(args: T): any[];
export declare function getExtendsPropertyDescriptors(data: unknown): Record<string, PropertyDescriptor> | undefined;
export declare function getDescriptors<T extends object>(data: T): Record<string, PropertyDescriptor> & { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
};
export declare function isTable(data: any): boolean;
