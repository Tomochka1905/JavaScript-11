//Task1 
"use strict";

const currentMaxValue = 4589;
let reverseMaxValue = Number(String(currentMaxValue).split('').
reverse(currentMaxValue).join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//Task 2

const resultsArray = [1, 2, [3, [4]]];
let numbers = resultsArray.flat(Infinity);
let productOfArray = 1

for (let number of numbers) {
    productOfArray *= number;
  }
console.log(productOfArray);
console.log(typeof productOfArray);




