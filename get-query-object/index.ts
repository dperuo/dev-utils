/**
 * Returns an object of key-value pairs representing the URL query string
 *
 * @param {String} search - The location.search value
 *
 * @return {Object} - The query object
 */

const getQueryObject = (search: string): Object => {
  const output: Object = {};
  const queries: string[] = search.substring(1).split('&');

  queries.forEach((query: string) => {
    const item: string[] = query.split('=');
    output[item[0]] = item[1];
  })

  return output;
}

export { getQueryObject };
