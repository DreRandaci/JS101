// 1. How many hours are in a year

const hours = 24;
const days = 365;

// console.log(hours * days);

// 2. How many minutes in a decade

let minutesInHour = 60;
let hoursInDay = 24;
let daysInYear = 365;
let decade = 10;
// console.log("minutes in decade:", minutesInHour * hoursInDay * daysInYear * decade);


// 3. How many seconds old they are

let myAge = 27;
let daysInYear = 365;
let secondsInMinute = 60;
let minutesInDay = 60 * 24;
let minutesInYear = daysInYear * minutesInDay;
let myAgeInSeconds = myAge * minutesInYear * secondsInMinute; 

// console.log("I am", myAgeInSeconds, "seconds old");


// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

if (myAge > 25) {
	console.log("I'm old");
} else {
	console.log("I'm young");
}