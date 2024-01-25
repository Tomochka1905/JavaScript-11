"use strict"

let message = "are you okay?"

let string = String(message);
console.log(message);
console.log(typeof string);

let number = parseInt(message);
console.log(message);
console.log(typeof number);

let bool = Boolean(message);
console.log(bool);
console.log(typeof bool);


//Task 2 

let rate = 37.45; 
let gryvnia = +prompt("Enter amount of UAH");
console.log(gryvnia);
let result = gryvnia / rate; 
console.log(result);

//Task 3

let gasPrice = +prompt("Enter price of the gas you would like to buy");
console.log(gasPrice);
let gasAmount = +prompt("How many liters do you need?");
console.log(gasAmount);
let sum = gasPrice * gasAmount;
console.log(+sum.toFixed(2));