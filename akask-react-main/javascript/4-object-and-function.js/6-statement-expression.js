
// Function statement
greet();


function greet() {
    console.log("HI");
}

greet();


// Function Expression
// anonymousGreet();

// Assign them to var

var anonymousGreet = function () {
    console.log("Hello");
}

anonymousGreet();

// pass them around

function log(a) {
    a();
}

log(anonymousGreet)

// on the fly

log(function(){
    console.log("Hey")
})






// function greet2(firstName){
//     console.log("HEllo" + firstName)
// };

// greet2("Jagan");
// greet2("Javid");