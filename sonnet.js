
// (x)Take the contents of the sonnet div and place it in a variable.
// (x)Find and output the starting position of the word "orphans".
// (x)Output the number of characters in the sonnet.
// (x)Replace the first occurance of the string "winter" with "yuletide".
// (x)Replace all occurances of the string "the" with "a large".
// (x)Set the content of the sonnet div with the new string.

let sonnetString = document.getElementById("sonnet").innerHTML; //taking two steps in one
// console.log(sonnet);
// let sonnetString = sonnet.innerHTML;
console.log(sonnetString);
console.log(sonnetString.indexOf("orphans")); // the first character index of "orphans" is 401
console.log(sonnetString.length); //the length of the sonnet is 618
sonnetString = sonnetString.replace("winter", "yuletide")
sonnetString = sonnetString.replace(/^ the /g, " a large ");
// console.log(sonnetString.replace("winter", "yuletide"));
// console.log(sonnetString.replace(/the/g, "a large"));

// sonnetString = sonnetString.replace("winter", "yuletide").replace(/the/g, "a large");
document.getElementById("sonnet").innerHTML = sonnetString;