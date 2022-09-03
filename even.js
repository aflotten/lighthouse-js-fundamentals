//is even example

const isEven = function (num) {
  return num % 2 === 0;
}
const tenIsEven = isEven(10);
const elevenisEven = isEven(11);

console.log(tenIsEven) //return true -> console.log(isEven(10)) is much cleaner
console.log(elevenisEven) // returns false -> console.log(isEven(11))