/**
 * getHash()
 *
 * Copywrite (c) 2017 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * Returns a random sequence of letters and numbers of any length.
 *
 * @param {number} size - The desired length of the hash
 *
 * @return {string} - The unique hash
 *
 * @example:
 *   var hash = getHash(6);
 *   // => "ll37j8"
 */

const getHash = (size: number): string => {
  return Math.floor(Math.random() * Math.pow(36,size)).toString(36);
}

export { getHash };
