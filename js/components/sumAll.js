import { arraySum } from './arraySum.js';

function sumAll(data) {
    for (let i = 0; i < data.length; i++) {
        const numberPair = data[i];
        const sum = arraySum(numberPair);

        console.log(numberPair, sum);
    }
}

export { sumAll }