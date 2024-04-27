export type Promisy<T extends (...args: any) => any> = (...args: T extends (...args: infer R) => any ? R : unknown) => Promise<ReturnType<T>>;
