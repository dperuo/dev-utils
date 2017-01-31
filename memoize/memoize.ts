/**
 * memoize()
 *
 * Copywrite (c) 2017 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * Returns a memoized instance of any function.
 *
 * @param {Funciton} callback - The funciton to memoize.
 * @return {Function} - The memoized function
 *
 * @example:
 *   var sum = memoize((...values) => values.reduce((total, value) => total + value);
 *   sum(5, 6, 7);
 *   // => 18
 */

const memoize = (callback: Function): Function => {
  const cache: Map<string, any> = new Map();

  return (...inputs) => {
    const key = JSON.stringify(inputs);

    if (cache.has(key)) {
      return cache.get(key);
    } else {
      cache.set(key, callback(...inputs));
      return cache.get(key);
    }
  }
}

export { memoize };
