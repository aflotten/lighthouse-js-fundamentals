const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
for (let i = 0; i < packingList.length; i++) { //set i to increment through the array by 1 then log it to the console
  console.log(packingList[i]);
}
 
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) { //use while loop do complete the same purpose. 
  console.log(packingList[i]);
  i++; //note the formating differences where the variable is defined outside of the while loop and increment inside
}