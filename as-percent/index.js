import { asRatio } from "../as-ratio";
const asPercent = (min, value, max) => {
    const asPercentage = 100;
    return asRatio(min, value, max) * asPercentage;
};
export { asPercent };
