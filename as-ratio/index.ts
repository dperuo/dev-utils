/**
 * Returns a decimal fraction of a known value compared against `min` and `max` values.
 *
 * @param {number} min - Smallest value.
 * @param {number} value - Known value.
 * @param {number} max - Lagest value.
 *
 * @return {number} Decimal fraction.
 *
 * @example
 *   var copy = asRatio(3, 4, 5);
 *   // => 0.5
 */

const asRatio = (min: number, value: number, max: number): number => {
  const adjustedMax = max - min;
  const adjustedValue = value - min;

  return adjustedValue / adjustedMax;
}

export { asRatio };
