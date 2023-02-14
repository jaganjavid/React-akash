const num1 = 100;
const num2 = 50;

let val;

// Simple math with number

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;


// MATH OBJECT

val = Math.PI;
val = Math.round(2.4);
val = Math.ceil(2.1); // upper Number
val = Math.floor(2.9); // lower Number
val = Math.sqrt(64);
val = Math.abs(-5); // always return thr positive value
val = Math.min(-5,0,3,4,2,1,5);
val = Math.max(-5,0,3,4,2,1,5);
val = Math.random();

val = Math.floor(Math.random() * 10);


console.log(val);