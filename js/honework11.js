// Task 1

detonatorTimer(3);

 function detonatorTimer(delay) {
    let countdown = setInterval(function() {
       if (delay > 0){
        console.log(delay);
        delay --;
       } else if (delay === 0) {
        console.log('BOOM!');
        clearInterval(countdown);
       }
 }, 1000);
}

//Task 2 
detonatorTimer(3);
function detonatorTimer(delay) {
    if (delay > 0) {
      console.log(delay);
      setTimeout(detonatorTimer(delay -1), 1000);
    } else {
      console.log('BOOM!');
    }
}

//Task 3
let cat = {
    name: 'Molly',
    breed: 'Scottish fold',
    gender: 'female',
    favoriteActivity: 'cuddling',
    bestFood: 'Wellness',
    behavior: 'calm and chill',
    makeIntroduction() {
        console.log(`My name is ${this.name} and I am ${this.breed}!`);
    },
    feed() {
        console.log(`Please give me a portion of ${this.bestFood} every morning around 8 am.`);
    },
    describeTypicalBehavior(){
        console.log(`I'm cat created for ${this.favoriteActivity} with my humans and I'm pretty ${this.behavior}.`);
    }
}
cat.makeIntroduction();
cat.feed();
cat.describeTypicalBehavior();

//Task4


let securedCatMakeIntroduction = cat.makeIntroduction.bind(cat);
let securedCatFeed = cat.feed.bind(cat);
let securedCatDescribeTypicalBehavior = cat.describeTypicalBehavior.bind(cat);

setTimeout(securedCatMakeIntroduction, 1000); // виведе коректний результат
setTimeout(securedCatFeed, 2000); // виведе коректний результат
setTimeout(securedCatDescribeTypicalBehavior, 3000); // виведе коректний результат