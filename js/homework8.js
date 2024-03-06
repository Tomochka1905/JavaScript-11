//TASK 1
console.log(addThemAll(2,4)); // 6
console.log(addThemAll(1,2,3,4)); // 10
console.log(addThemAll(5,5,10)); // 20
function addThemAll(...numbers) {
return numbers.reduce((sum, number) => sum + number,0);
}

//TASK 2
console.log(multiply(5)(5))     // 25
console.log(multiply(2)(-2))    // -4
console.log(multiply(4)(3))     // 12
function multiply(a) {
return function multiplier(b){
    return a * b;
}
}