const asRatio = (min, value, max) => {
    const adjustedMax = max - min;
    const adjustedValue = value - min;
    return adjustedValue / adjustedMax;
};
export { asRatio };
