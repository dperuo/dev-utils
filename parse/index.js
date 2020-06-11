const parse = (data) => {
    try {
        return JSON.parse(data);
    }
    catch (_a) {
        return data;
    }
};
export { parse };
