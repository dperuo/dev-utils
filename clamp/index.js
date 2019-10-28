const clamp = (min, value, max) => {
    return Math.max(min, Math.min(value, max));
};
export { clamp };
