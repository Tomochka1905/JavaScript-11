//Task  1 
function iterativeOddSumTo(number) {
    let sum = 0;
    let currentNumber = 1;
    while(currentNumber <= number) {
        if(currentNumber % 2 === 1 ){
            sum += currentNumber;
        }
        currentNumber +=1;
    }
        return sum;
    }

      console.log(iterativeOddSumTo(1)) // 1
      console.log(iterativeOddSumTo(9)) // 25
      console.log(iterativeOddSumTo(10)) // 25
