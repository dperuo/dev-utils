const getEnum = (items) => {
    const output = {};
    for (let key in items) {
        let value = items[key];
        output[key] = value;
        output[value] = key;
    }
    return output;
};
export { getEnum };
