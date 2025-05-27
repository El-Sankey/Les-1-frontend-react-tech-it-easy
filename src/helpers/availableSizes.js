// import {bestSellingTv} from "../constants/inventory.js";


console.log('========== opdracht 2c ==========');

export function availableSizes(inputArray) {
    let tvSizesConvert;
    let calculateString;
    let calculateArray;
    calculateArray = [];
    for (let i = 0; i < inputArray.availableSizes; i++) {
    tvSizesConvert = Math.round(inputArray.availableSizes[i]) * 2.54;
    calculateString = `${inputArray.availableSizes[i]} inch (${tvSizesConvert} cm)`;
    calculateArray.push(calculateString);
    }
    return calculateString.join(' | ')
}
console.log(availableSizes)


