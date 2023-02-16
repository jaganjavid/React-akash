const number = [5,65,2,5,23,4,76,32,44]; //** */

const furit = ["apple", "banana", "orange"];

// const number2 = new Array(45,56,2,25,665,67);

let val;

// Get Array Length
val = number.length;

// Check if is Array
val = Array.isArray(number);

// Get Single value
val = number[1];

// Insert into array
// val = number[2] = 100;

// Find the index of value
val = number.indexOf(1); // if array match is return the index else return -1

// console.log(number);
// Mutating Array

// Add on the end
// number.push(1000);

// Add on the front
// number.unshift(3000);

// Take off from end
// number.pop();

// Take off from front
// number.shift();
console.log(furit);

// Splice to remove
// val = furit.splice(1,1);

// Splice to add
// furit.splice(1,2,"Lemon");

// Reverse the array

val = number.reverse();

// console.log(number);
console.log(val);

// console.log(furit);
