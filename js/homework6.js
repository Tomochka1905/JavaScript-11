//Task  1 
function iterativeOddSumTo(number) {
    let sum = 0;
    for(let currentNumber = 1; currentNumber <= number; currentNumber++){
        if(currentNumber % 2 === 1) {
            sum += currentNumber;
        }
    }
    return sum;
}
console.log(iterativeOddSumTo(1)) // 1
console.log(iterativeOddSumTo(9)) // 25
console.log(iterativeOddSumTo(10)) // 25


//Task 2 
function recursiveOddSumTo(number) {
    if (number <= 0) {
        return 0;
    } else if (number % 2 === 1) {
        return number + recursiveOddSumTo(number - 2);
    } else {
        return recursiveOddSumTo(number - 1);
    }
     };
    console.log(recursiveOddSumTo(1)) // 1
    console.log(recursiveOddSumTo(9)) // 25
    console.log(recursiveOddSumTo(10)) // 25