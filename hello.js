// example 1 - 
const sayHello = function() {
  console.log("Hello, lad");
}
sayHello()

// example 2
const sayHi = function(name) {
  console.log("Hello " + name);
}
sayHi("Bruce") //needs to be a string or itll pass as undefined

// even number example (return and console log)
const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');

//return version
const returnSayHello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello("John");
console.log(greeting);