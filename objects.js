
let x = "humidity";

let weather = {
	currentTemp: 82, 
	isRaining: false,
	humidity: "too much",
	'is-sunny': true
};

console.log(weather);

//this is assigning a property to an object
weather.location = "Nashville"; 
weather['zipCode'] = 37210;
//both of those syntax options are valid. "Dot" notation is usually fine. in the case of 'is-sunny', you'd have to use bracket notation
console.log(weather);

console.log(weather.isRaining);
console.log(weather['is-sunny']);

console.log("humidity", weather[x]); // this is saying it wants to access the key 'x' and the value it holds
console.log(weather.x); // this will look for a key named 'x' within the weather object, which will return undefined

