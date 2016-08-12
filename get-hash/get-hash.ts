// getHash()
// Copywrite (c) 2016 Derek Peruo
// Licensed under the MIT License
// http://github.com/dperuo
//
// Returns a random sequence of letters and numbers of any length.
//
// @param {number} size - The desired length of the hash
//
// @return {string} - The unique hash
//
// @example:
//   var hash = getHash(6);
//   // => "ll37j8"

((root, factory: Function) => {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.getHash = factory();
  }
})(this, () => {
    return (size: number): string => {
      return Math.floor(Math.random() * Math.pow(36,size)).toString(36);
    }
});
