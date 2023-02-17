// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// Equal to value

if(100 == "100"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT");
}

// NOT EQUAL TO

if(id != 101){
    console.log("CORRECT")
} else {
    console.log("INCORRECT");
}

// EQUAL TO VALUE AND TYPE

if(100 === "100"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT");
}

// NOT EQUAL TO VALUE AND TYPE

if(100 !== "101"){
    console.log("CORRECT")
} else {
    console.log("INCORRECT");
}

// Test if UNDEFINED

let greet;

if(typeof greet !== "undefined"){
    console.log(`true : ${greet}`)
} else {
    console.log(`false : ${greet}`)
}

// Greater or less than

if(100 >= 99){
    console.log("CORRECT")
} else {
    console.log("INCORRECT");
}

// if else
const color = "blue";

if(color === "red"){
    console.log("Color is red")
} else if(color === "blue"){
    console.log("Color is blue")
} else {
    console.log("No Matched color")
}

// LOGICA OPERATOR

const name = "Javid";
const age = 66;

// AND - && check both value true

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teen`);
} else {
    console.log(`${name} is a adult`);
}

// OR - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`)
} else {
    console.log(`${name} is can run the race`)
}

// TERNARY OPERATOR

console.log(100 === 101 ? "CORRECT" : "INCORRECT")