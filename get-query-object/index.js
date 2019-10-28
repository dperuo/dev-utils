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
