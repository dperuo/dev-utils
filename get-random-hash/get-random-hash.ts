/**
 * getRandomHash()
 *
 * Copywrite (c) 2017 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * Returns a random sequence of letters and numbers of any length.
 *
 *
 * @param {number} size - The desired length of the hash. Default length is 36.
 *
 * @return {string} - The unique hash
 *
 * @example:
 *   var hash = getHash(6);
 *   // => "ll37j8"
 */

const getRandomHash = (size: number = 12): string => {
  const hash = [];

  for (let span = size; span--;) {
    const char = Math.floor(Math.random() * Math.pow(36,1)).toString(36);
    hash.push(char);
  }

  const output = hash.join('');

  return output;
}

export { getRandomHash };
