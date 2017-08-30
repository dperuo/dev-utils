/**
 * getEnum()
 *
 * Copywrite (c) 2017 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * Returns an enumerated version of an object.
 *
 * @param {Object} items - The object to enumerate
 * @return {Object} - The enumerated object
 *
 * @example:
 *   const keyCodes = { 'foo' : 'bar' }
 *   const enumKeyCodes = getEnum(keyCodes);
 *   // => { 'foo' : 'bar', 'bar' : 'foo' }
 */

const getEnum = (items: Object): Object => {
  const output = {}

  for (let key in items) {
    let value = items[key];
    output[key] = value;
    output[value] = key;
  }

  return output;
}

export { getEnum };
