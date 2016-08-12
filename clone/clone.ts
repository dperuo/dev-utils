// clone()
// Copywrite (c) 2016 Derek Peruo
// Licensed under the MIT License
// http://github.com/dperuo
//
// Return a deep copy of an object of any depth.
//
// @param {*} obj - The origional object
//
// @return {*} - The clone
//
// @example
//   var copy = clone(complexObj);

((root, factory) => {
    if (typeof define === 'function' && define.amd) {
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      module.exports = factory();
    } else {
      root.clone = factory();
  }
})(this, () => {
    return function (obj: Object): Object {
      // heyjavascript.com/4-creative-ways-to-clone-objects/
      return JSON.parse(JSON.stringify(obj));
    }
});
