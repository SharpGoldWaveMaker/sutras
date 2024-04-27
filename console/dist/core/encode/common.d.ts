import type { DObjReal, DRecord } from '../../definition';
export declare function createRealItem<T>(value: T, hidden?: boolean): {
    '@hidden': boolean;
    '@value': T;
};
export declare function createFakeRecord<T extends DObjReal>(value: T, name?: string | null): DRecord;
