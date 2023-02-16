const name = "Javid";
const age = 25;
const job = "web developer";
const city = "chennai";


let html;


// Without Template Strings

html = "My name is " + name + " " + "im" + " " + " " + age + " " + "my job is " + job + " " + city;


// With Template String (es6)

html = `My Name is ${name} im ${age} my job
is ${job} amd im from ${city}`;

console.log(html);