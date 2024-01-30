//Task 1 

// using for 

let value = prompt("Enter value");
if (isNaN(value)) {
     value= +prompt('Please, enter correct number!');
}
for(let i = 2; i < value; i += 2){
    console.log(i);
};

// using while 

let value = prompt("Enter value");
if (isNaN(value)) {
     value= +prompt('Please, enter correct number!');
}
let j = 10; 
while ( j < value){
    console.log(j);
    j += 2;
};

//Task 2

for (let i = 1; i <=100; i ++) {
    if ( i % 3  === 0) {
        console.log('Fizz'); 
    } else if (i % 5 === 0) { 
            console.log('Bizz');
        } else {( i % 5 === 0 &&  i % 3 === 0) 
                console.log('FizzBizz');
        }
    };
    

