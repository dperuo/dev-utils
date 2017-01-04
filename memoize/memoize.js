// memoize()
// Copywrite (c) 2017 Derek Peruo
// Licensed under the MIT License
// http://github.com/dperuo
//
// Returns a memoized instance of any function.
//
// @param {Funciton} callback - The funciton to memoize.
// @return {Function} - The memoized function
//
// @example:
//   var sum = memoize((...values) => values.reduce((total, value) => total + value);
//   sum(5, 6, 7);
//   // => 18
"use strict";
var memoize = function (callback) {
    var cache = new Map();
    return function () {
        var inputs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            inputs[_i] = arguments[_i];
        }
        var key = JSON.stringify(inputs);
        if (cache.has(key)) {
            return cache.get(key);
        }
        else {
            cache.set(key, callback.apply(void 0, inputs));
            return cache.get(key);
        }
    };
};
exports.memoize = memoize;
