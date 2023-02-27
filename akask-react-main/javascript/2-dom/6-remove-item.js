// Replace Element

const newHeading = document.createElement("h2");
newHeading.id = "task-title";

newHeading.appendChild(document.createTextNode("Task Title"));


const oldHeading = document.getElementById("task-title");

const cardAction = document.querySelector(".card-action");

cardAction.replaceChild(newHeading,oldHeading);

console.log(oldHeading);

// Remove Element

const list = document.querySelectorAll("li"); // nodelist

list[1].remove();

// Class & Attr

const firstLi = document.querySelector("li:first-child");

const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;

val.add("Test");

// val.forEach(function(cls){
//   console.log(cls);
// })

val.contains("jashest");

// val.remove("Test");

val.replace("Test", "test");


// console.log(val);
// console.log(x);
