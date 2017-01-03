// memoize()
// Copywrite (c) 2017 Derek Peruo
// Licensed under the MIT License
// http://github.com/dperuo
//
// Returns a memoized instance of any function.
//
// @param {Funciton} callback - The funciton to memoize
//
// @return {Function} - The memoized function
//
// @example:
//   var isEven = memoize(value => value % 2 === 0);
//   isEven(7);
//   // => false
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    }
    else {
        root.memoize = factory();
    }
})(this, function () {
    return function (callback) {
        var cache = new Map();
        return function (key) {
            if (cache.has(key)) {
                return cache.get(key)(key);
            }
            else {
                cache.set(key, callback);
                return cache.get(key)(key);
            }
        };
    };
});
