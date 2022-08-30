const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 3) {//changed to only execute loop 3 times
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!"); //only logs once as its out of the loop

// new example
const chorus2 = "Let's dance!"; // changed variable to accomadate the variable in first example
let repeat1 = 0;
while (repeat1 < 6) {
  if (repeat1 === 5) {
    console.log("*change key*");
  }
  console.log(chorus2);
  repeat1 = repeat1 + 1; //old school increment
}
console.log("Until the sun comes up!");