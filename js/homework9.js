//Task 1 
detonatorTimer(3);
// 3
// 2
// 1
// BOOM!


// Таймер зворотного відліку:
 // let timeLeft = 10; // відлік з 10 секунд

 // let intervalId = setInterval(function () {
 //   console.log(`Залишилось часу: ${timeLeft--} секунд`);

 //   if (timeLeft < 0) {
 //     clearInterval(intervalId); // зупиняємо таймер, коли час вийшов
 //     console.log("Час вийшов!");
 //   }
 // }, 1000);

detonatorTimer(delay) {
    let  
	if (delay = 0) {
        console.log
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
cat.describeTypicalBehavior()