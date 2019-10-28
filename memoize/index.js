const memoize = (callback) => {
    const cache = new Map();
    return (...inputs) => {
        const key = JSON.stringify(inputs);
        if (cache.has(key)) {
            return cache.get(key);
        }
        else {
            cache.set(key, callback(...inputs));
            return cache.get(key);
        }
    };
};
export { memoize };
