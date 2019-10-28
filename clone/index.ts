/**
 * Returns a deep copy of an object of any depth.
 * Hat tip to heyjavascript.com/4-creative-ways-to-clone-objects/
 *
 * @param {Object} obj - The origional object
 *
 * @return {Object} The cloned object.
 *
 * @example
 *   var copy = clone(complexObj);
 */

const clone = (obj: Object): Object => {
  try {
    return JSON.parse(JSON.stringify(obj));
  } catch (error) {
    return obj;
  }
}

export { clone };
