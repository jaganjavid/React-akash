// function statment

function greet(name){
    console.log("Hello " + name);
}


greet("Javid");

// Using a function expression
var greetFunc = function(name){
    console.log("Hello " + name);
}

greetFunc("Jagan");

// Using an immediately invoked function expression(IIFE);

var greeting = function(name){
    return "Hello " + name;  
}("Jav");

// IIFE 

var firstName = "Javid";

(function (name){
    var greetingtwo = "Inside IIFE : Hello";
    console.log(greetingtwo + " " + name);
}("Akash"))


// This function does not affect same var names

// function test1(){
//     var test = "test"
// }
// function test2(){
//     var test = "test"
// }







