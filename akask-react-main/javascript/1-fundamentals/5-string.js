const firstName = "JAGANUI";
const lastName = "Javid";
const age = 25;
const str = "Hello Im Jagan and Im a Web dev";


let val;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + "Doe";
val += " Doe";

val = "Hello , My name is " + firstName + ' and I am ' + age;

// Length
val = firstName.length;


// Concat 
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];
val = firstName[1];

// CharAt()
val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);

// Slice()

const furits = "Banana";

val = furits.slice(1, 3);

// Split()
val = str.split(" ");

// Replace
val = str.replace("Jagan", "Javid")

// Include
val = str.includes("Josh")

console.log(val);