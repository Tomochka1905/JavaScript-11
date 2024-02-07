//Task1 

const currentMaxValue = 4589;
let string = String(currentMaxValue);
let arr= string.split('');
arr.reverse();
console.log(arr.join());
let reverseMaxValue = Number(arr.join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//Task 2

const resultsArray = [1, 2, [3, [4]]];
let array = resultsArray.flat(Infinity);
let numbers = array;
let productOfArray = 1;
for (let i = 0; i < numbers.length; i++) {
    productOfArray = productOfArray * numbers[i];
  }

console.log(productOfArray);
console.log(typeof productOfArray);
