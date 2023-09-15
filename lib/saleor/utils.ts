export function invariant<T>(val: T | null | null, message: string): asserts val is T {
  if (val === null || val === null) {
    throw new Error(message);
  }
}
