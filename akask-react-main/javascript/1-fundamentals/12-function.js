
// Two phases

// 1 - creatation
// 2 - excutation 

// Function decalaration - FUNCTION STATEMENT

// function greet(firstName = "John", lastName = "Doe"){

    // if(typeof firstName === "undefined"){firstName = "John"};
    // if(typeof lastName === "undefined"){lastName = "Doe"};

//     return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet("Jagan", "Javid"));
// console.log(greet("kjask", "asdA"));

// FUNCION EXPRESSION

// var add = function(x = 5){
//    console.log(x + 5);
// }

// add();

// An IIFE (Imediately invoked function Expression) in a javascript




// const run = (function(){
//     console.log("IIFE RUN");
//     var a = 5;
//     return {
//         a
//     };
// })();

// console.log(run.a);
// a = 7;

// console.log(a);

// (function(name){
//     console.log(name);
// })("Jagan");

const person = {
    firstName : "Jagan",
    lastName : "Javid",
    getFUllName: function(){
        return `Hello ${this.firstName} ${this.lastName}`;
    },
    testThis: function(){
        return this;
    }
}

person.age = 25;

person.greet = function(){
    return "Vanakam";
}

console.log(person.getFUllName());
console.log(person.testThis());
console.log(person.greet());

