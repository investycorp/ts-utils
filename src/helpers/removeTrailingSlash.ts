/**
 * Removes the trailing slash from a URL string.
 *
 *
 * @param value The value to mutate.
 * @returns A new string without a trailing slash.
 */
export const removeTrailingSlash = (value: string): string => value.replace(/\/+$/, '');
