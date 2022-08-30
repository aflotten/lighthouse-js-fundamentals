const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

// new example
const temperature = 15; //if temp is 15 or more the else block will execute

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

// new example - logical operators
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) { // evaluates if both are true then will log to console
  console.log("You are eligible to vote.");
}

//new example - if temperature is outside of our set range it will log to console

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//new example - used not operator as a double negative (where dry weather is read as true)

if (!raining) {
  console.log("Leave your umbrella at home!");
}