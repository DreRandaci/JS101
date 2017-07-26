

let x = "humidity";

let weather = {
	currentTemp: 82, 
	isRaining: false,
	humidity: "too much",
	'is-sunny': true
};

// console.log(weather);

//this is assigning a property to an object
// weather.location = "Nashville"; 
// weather['zipCode'] = 37210;
// //both of those syntax options are valid. "Dot" notation is usually fine. in the case of 'is-sunny', you'd have to use bracket notation
// console.log(weather);

// console.log(weather.isRaining);
// console.log(weather['is-sunny']);

console.log("humidity", weather[x]); // the console displays 'humidity', then accesses the object called 'weather' and looks for a key name of whatever the variable is holding, which in this case is 'humidity'. It then finds that key within the object and displays it's value, which is 'too much'
console.log("humidity", weather.humidity); // is the same as the previous console.log
// console.log(weather.x); // this will look for a key named 'x' within the weather object, which will return undefined

