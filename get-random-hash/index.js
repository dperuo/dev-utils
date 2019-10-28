const getRandomHash = (size = 12) => {
    const hash = [];
    for (let span = size; span--;) {
        const char = Math.floor(Math.random() * Math.pow(36, 1)).toString(36);
        hash.push(char);
    }
    const output = hash.join('');
    return output;
};
export { getRandomHash };
