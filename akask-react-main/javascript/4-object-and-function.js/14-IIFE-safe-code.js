// IIFE
(function(global, name){
    var greeting = "Hey";
    global.greeting = "Vanakam";
    console.log("IIFE", greeting + " " + name);
}(window, "Javid")); // Invoked()

console.log(greeting);
greeting = "Hola"
console.log(window);
console.log(greeting);

// () // 1

// () // 2
 
// () // 3

// (function (){
//     var test = "test1";
//     console.log(test);

//     function test(){
//         console.log("Test 1 from top")
//     }

//     console.log(test)

    
// }())

// (function(){
//     var test = "test2";
//     console.log(test);
//     function test(){
//         console.log("Test 1 from bottom")
//     }
   
// }())

