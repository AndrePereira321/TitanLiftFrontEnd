export const isUndefined = (value: unknown): value is undefined => value === undefined;
export const isNull = (value: unknown): value is null => value === null;
export const isNullOrUndefined = (value: unknown): value is null | undefined => value === null || value === undefined;
