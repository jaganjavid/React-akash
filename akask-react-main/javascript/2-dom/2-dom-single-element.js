// document.getElementById();

// console.log(document.getElementById("task-title"));
// console.log(document.getElementById("task-title").id);
// console.log(document.getElementById("task-title").className);

const taskTitle = document.getElementById("task-title");


// Change Style
taskTitle.style.background = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "15px";

// Change Content
taskTitle.textContent = "Hello Akash";
taskTitle.innerText = "Hello Jagan";
taskTitle.innerHTML = "<p>Hello Jagan Javid</p>";

// document.querySelector() // ***


// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-action"));
// console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "blue";
document.querySelector("ul li").style.color = "brown";
document.querySelector("li:nth-child(3)").style.color = "orange";
// document.querySelector("").style.color = "orange";
// document.querySelector("").style.color = "orange";

