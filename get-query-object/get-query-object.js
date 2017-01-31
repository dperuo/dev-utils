/**
 * getQueryObject()
 *
 * Copywrite (c) 2017 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * returns an object of key-value pairs representing the URL query string
 *
 * @param {String} search - The location.search value
 *
 * @return {Object} - The query object
 */
const getQueryObject = (search) => {
    const output = {};
    const queries = search.substring(1).split('&');
    queries.forEach((query) => {
        const item = query.split('=');
        output[item[0]] = item[1];
    });
    return output;
};
export { getQueryObject };
