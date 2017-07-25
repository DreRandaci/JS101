// console.log("this is second.js");

// let perry = "penguin";
// let nellie = "owl";

// console.log("Perry is a " + perry);

let quote = "when you don’t create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create. things.";

// let numberOfCharacters = quote.length;
// console.log("Length of quote:", numberOfCharacters);


// Built In Methods
// .indexOf()
// .charAt()
// .replace()


//FIRST QUOTE
// console.log("The index of the first time 'things' is written is (the index of 't')", quote.indexOf("things")); //will give index of the beginning of the string (first encounter)
// console.log("The character at index 54 in the quote is", quote.charAt(54)); //will give the character at the specified index
console.log(quote.replace(/things/g, "robots")); //the 'g' and the slashes make it globale, or all occurencs 
document.getElementById("quote").innerHTML = quote; //inserting the contents of the "quote" variable into the html ID of "quote"


//SECOND QUOTE
let element = (document.getElementById("secondQuote")); //grabbing anything associated with this ID
let jsString = element.innerHTML; //what content is in that ID
console.log(jsString); //prints the content to the console

// console.log(document); just displays all of the DOM