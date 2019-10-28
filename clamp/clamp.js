/**
 * clamp()
 *
 * Returns a number between min and max values.
 *
 * FROM: https://github.com/ionic-team/ionic/blob/master/core/src/utils/helpers.ts#L57
 *
 * @param {number} min - Smallest value.
 * @param {number} value - Value to test agaist `min` and `max` value.
 * @param {number} max - Largest value.
 *
 * @return {number} - The number between min and max values.
 *
 * @example:
 *   const val = clamp(3, 4, 5);
 *   // => 4
 *
 *   const val = clamp(3, 12, 5);
 *   // => 5
 *
 *   const val = clamp(3, 1, 5);
 *   // => 3
 */
const clamp = (min, value, max) => {
    return Math.max(min, Math.min(value, max));
};
export { clamp };
