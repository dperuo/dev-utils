/**
 * clone()
 *
 * Copywrite (c) 2017 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * Returns a deep copy of an object of any depth.
 * Hat tip to heyjavascript.com/4-creative-ways-to-clone-objects/
 *
 * @param {Object} obj - The origional object
 *
 * @return {Object} - The clone
 *
 * @example
 *   var copy = clone(complexObj);
 */
const clone = (obj) => {
    return JSON.parse(JSON.stringify(obj));
};
export { clone };
