/**
 * Parse a JSON string, or return the original.
 *
 * @param {any} data - The string to parse
 *
 * @return {any} The parsed object
 *
 * @example
 *   const data = "{ "foo": "bar" }"
 *   const parsed = parse(data);
 *   // => { foo: "bar" }
 */

const parse = (data: any): any => {
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}

export { parse };
