// getCookieObject()
// Copywrite (c) 2016 Derek Peruo
// Licensed under the MIT License
// http://github.com/dperuo
//
// returns an object of key-value cookie pairs
//
// @param {String} cookies - The document.cookie string
//
// @return {Object} - The cookie object
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    }
    else {
        root.getCookieObject = factory();
    }
})(this, function () {
    return function (cookies) {
        var output = {};
        var cookiesArray = cookies.split('; ');
        cookiesArray.forEach(function (value) {
            var item = value.split('=');
            output[item[0]] = item[1];
        });
        return output;
    };
});
