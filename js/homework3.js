//Task 1 

// using for 

let value = prompt("Enter value");
if (isNaN(value)) {
     value= +prompt('Please, enter correct number!');
}
for(let evenNumbers = 2; evenNumbers < value;  evenNumbers += 2){
    console.log(evenNumbers);
};

// using while 

let value = prompt("Enter value");
if (isNaN(value)) {
     value= +prompt('Please, enter correct number!');
}
let evenNumbers = 10; 
while ( evenNumbers < value){
    console.log(evenNumbers);
    evenNumbers += 2;
};

//Task 2

let testNumber = +prompt("Enter a number from 1 to 100");
console.log(testNumber);

for (let i = 1; i <=100; i ++) {
    if (testNumber % i === 3) {
        console.log('Fizz'); 
    } else if (testNumber % i === 5) {
            console.log('Bizz');
        } else {(testNumber % i === 5 && testNumber % i === 3) 
                console.log('FizzBizz');
        }
    };
    

