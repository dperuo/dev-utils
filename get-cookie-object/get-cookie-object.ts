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

((root, factory) => {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.getCookieObject = factory();
  }
})(this, () => {
    return (cookies: string): Object => {
      var output: Object = {};
      var cookiesArray: string[] = cookies.split('; ');

      cookiesArray.forEach((value: string) => {
        var item: string[] = value.split('=');
        output[item[0]] = item[1];
      });

      return output;
    }
});
