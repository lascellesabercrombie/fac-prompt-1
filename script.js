//Prompt 1

let name = '';
const greeter = function(name) {
//print greeting with name fed in
  console.log (`Hello ${name}!`)
}
//run greeting
greeter ('Bill')

//Prompt 2

/*let x = '';
const typeChecker = function(x) {
console.log(typeof x);
}
typeChecker(true)*/

//arrow notation version
let x = '';
//use typeof to get type
const typeChecker = (x) => {console.log(typeof x)}
typeChecker([4, 2, 3])
//NB arrays return as "object"

//Prompt 3 function to return length of string passed in

let word = '';
const lengthChecker = (word) => {
  //use .length to get string length
  console.log(word.length)
}
lengthChecker([1, 2, 8])
//NB doesn't work on numbers or booleans, but gives number of items in an array, as well as giving length of strings

