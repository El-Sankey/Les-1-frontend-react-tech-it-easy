// import {bestSellingTv} from "../constants/inventory.js";


import {bestSellingTv} from "../constants/inventory.js";

console.log('uitkomst opdracht 2');

export function availableSizes(inputArray) {
    let tvSizesConvert;
    let calculateString;
    let calculateArray =[]
    for (let i = 0; i < inputArray.availableSizes; i++) {
    tvSizesConvert = Math.round(inputArray.availableSizes[i]) * 2.54;
    calculateString = `${inputArray.availableSizes[i]} inch (${tvSizesConvert} cm)`;
    calculateArray.push(calculateString);
    }

    return calculateString.join(' | ')
}

