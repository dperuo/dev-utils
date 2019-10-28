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
