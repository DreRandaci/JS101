 
// create a variable with the string list of colors
// make the list into an array
// sort that array alphabetically
// loop through the array and log to the console the statements:
// 				"The color at " index number "is " color name

let colorList = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red";
let array = colorList.split(", ");
console.log(array);

array.sort(); // do not need to store in another variable - it returns the data
console.log(array);

for (var i = 0; i < array.length; i++) {
	console.log("The color at " + i + " is " + array[i]);
}