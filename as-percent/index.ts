import { asRatio } from "../as-ratio";

/**
 * Returns the percentage of a known value compared against `min` and `max` values.
 *
 * @param {number} min - Smallest value.
 * @param {number} value - Known value.
 * @param {number} max - Lagest value.
 *
 * @return {number} Percentage.
 *
 * @example
 *   var copy = asPercent(3, 4, 5);
 *   // => 50
 */

const asPercent = (min: number, value: number, max: number): number => {
  const asPercentage = 100;

  return asRatio(min, value, max) * asPercentage;
}

export { asPercent };
