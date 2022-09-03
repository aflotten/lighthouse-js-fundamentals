const isOdd = function (num) {
  return num % 2 != 0; //use % to reduce the number and
  //return true when it is false
}

console.log("3 is odd: " + isOdd(3)) //returns true
console.log("3 is odd: " + isOdd(8)) //returns false