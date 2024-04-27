export declare function getStatePromise(promise: Promise<unknown>): Promise<{
    state: 'pending';
    value: undefined;
} | {
    state: 'fulfilled' | 'rejected';
    value: unknown;
}>;
