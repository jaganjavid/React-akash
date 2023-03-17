
// Function statement
// greet();


function greet() {
    console.log("HI");
}

// greet();


// Function Expression
// anonymousGreet(); // error

// Assign them to var

var anonymousGreet = function () {
    console.log("Hello");
}

// anonymousGreet();

// pass them around

function log(a) {
    a();
}

log(anonymousGreet);

var a = 5;
var b = {name: "Test"}
function innerTest(){
    return "Hello";
}
var result = innerTest();

var test = function(a,b,result){
   

    console.log(a,b,result)
}

test(a,b,result);

// log(anonymousGreet)

// on the fly

log(function(){
    console.log("Hey")
})


var d = 5;
console.log(d);



// function greet2(firstName){
//     console.log("HEllo" + firstName)
// };

// greet2("Jagan");
// greet2("Javid");


var e = 6;
e = 7; // MUtate

const f = 7;
console.log(f);