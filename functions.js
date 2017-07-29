console.log("This is going to be functional")

console.log(cutUpInput);
let outputNumber = (cutUpInput(5));
console.log(outputNumber);

// example of 'single responsibility principle'

function nuggetFactory (animalInput) {
	// chickens are cut up
	cutUpInput(animalInput);
	// chickens are separated into chunks
	// take the chunks and fry them
	// package the nuggets
};

function cutUpInput (input) {
	let output = input * 20;
	return output;
};

// function declarations 

var summation;
var constant = 40;

function doesAddition(number1, number2) {
	// let sum = number1 + number2;
	summation = number1 + number2 + constant;
	// return sum;
};

doesAddition(2, 3);

console.log(summation)

// Function expression

var additionAction = function (first, second) {
	return first + second;
}
console.log(additionAction(4, 9))