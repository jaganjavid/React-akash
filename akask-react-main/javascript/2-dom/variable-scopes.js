// GLOBAL, FUNCTION , BLOCK SCOPE

var a = 1;
let b = 2;
const c = 3;

// Function 

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
   

    console.log(`Function Scope , ${a} ${b} ${c}`);
}
// test()

console.log(`Global Scope`, a, b, c);

if(true){
    // Block SCOPE
    // var a = 4;
    let b = 5;
    const c = 6;

    // console.log(`Block Scope ${a} ${b} ${c}`);
}

for(let a = 0; a < 10; a++){
    // console.log(`Loop`,a);
}

// console.log(`Global Scope`, a, b, c);




var greet = "Hello";

console.log(greet);

Hello();

function Hello(){
    console.log('Hello');
}



const tamilGreet = function(){
    console.log("Vanakam");
}

tamilGreet();
