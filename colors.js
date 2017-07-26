 
// create a variable with the string list of colors
// make the list into an array
// sort that array alphabetically
// loop through the array and log to the console the statements:
// 				"The color at " index number "is " color name

// let colorList = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red";
// let array = colorList.split(", ");
// console.log(array);

// array.sort(); // do not need to store in another variable - it returns the data
// console.log(array);

// for (var i = 0; i < array.length; i++) {
// 	console.log("The color at " + i + " is " + array[i]);
// }



// 1. Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every 	  time it executes. 
// 2. Use console.log() to output the value of the counter variable each time through the loop. 
// 3. Stop execution of the loop if the counter variable’s value is greater than 120

for (var i = 5; i <= 120; i = i + 10) {
	console.log("Current value is ", i);
}
