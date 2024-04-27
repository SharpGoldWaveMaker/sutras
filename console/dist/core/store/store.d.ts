export declare class LinkStore {
    private linkMap;
    private max;
    private accessOrder;
    private count;
    constructor(max?: number | null);
    clear(): void;
    set(obj: object): string;
    get(key: string): object | undefined;
    query(obj: object): string | undefined;
    private evict;
    private moveToFront;
}
