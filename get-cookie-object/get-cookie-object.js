/**
 * getCookieObject()
 *
 * Copywrite (c) 2017 Derek Peruo
 * Licensed under the MIT License
 * http://github.com/dperuo
 *
 * returns an object of key-value cookie pairs
 *
 * @param {String} cookies - The document.cookie string
 *
 * @return {Object} - The cookie object
 */
const getCookieObject = (cookieString) => {
    const output = {};
    const cookies = cookieString.split('; ');
    cookies.forEach((cookie) => {
        const item = cookie.split('=');
        output[item[0]] = item[1];
    });
    return output;
};
export { getCookieObject };
