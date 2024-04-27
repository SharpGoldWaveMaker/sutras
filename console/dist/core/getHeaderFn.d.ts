export declare enum TypesFn {
    fn = 0,
    arrowFn = 1,
    propFn = 2
}
export declare function getHeaderFn(code: string): {
    name: string;
    args: string;
    content: string;
    isAsync: boolean;
    isStar: boolean;
    typeFn: TypesFn;
};
