// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Load All Event Listeners

loadEventListerners();

function loadEventListerners(){

    // DOM LOAD EVENT
    document.addEventListener("DOMContentLoaded", getTasks);

    // Add Task Event
    form.addEventListener("submit", addTask);
    // Remove Task List
    taskList.addEventListener("click", removeTask);
    // Remove All Item From Ul
    clearBtn.addEventListener("click", clearTask);
  
}

function getTasks(){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

        tasks.forEach(function(task){
            // Create LI Element
        const li = document.createElement("li");

        // Add Class
        li.className = "collection-item";

        // Create Text node
        li.appendChild(document.createTextNode(task));

        // Create a new link element
        const link = document.createElement("a");

        // Add Class
        link.className = "delete-item secondary-content";

        // Add Icon HTML
        link.innerHTML = `<i class="fa fa-remove"></i>`;

        // add to li
        li.appendChild(link);

        // Add li to ul
        taskList.appendChild(li);
    })
}

// Add Task

function addTask(e){

    e.preventDefault();

    if(taskInput.value === ""){
        alert("Please fill the form");
        // return false;
    } else {

    // Create LI Element
    const li = document.createElement("li");

    // Add Class
    li.className = "collection-item";

    // Create Text node
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a new link element
    const link = document.createElement("a");

    // Add Class
    link.className = "delete-item secondary-content";

    // Add Icon HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;

    // add to li
    li.appendChild(link);

    // Add li to ul
    taskList.appendChild(li);

    // Store In LS
    storeTaskInLocalStorage(taskInput.value);
    
    // Clear task Input
    taskInput.value = "";
    }
}

    // Store In LS

function storeTaskInLocalStorage(task){
    let tasks;

    if(localStorage.getItem("tasks") === null){
        // Run If there no element
        tasks = [];
        console.log("1")
    } else{
        // After Every time run
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log("2")
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks)); // string

}

// const arr = [1,2,3,4,5];

// console.log(arr)

// console.log(JSON.parse("[1,2,3,4,5]"));




function removeTask(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){
        e.target.parentElement.parentElement.remove();
        // e.i.a.li.remove();
    } 
}

function clearTask(){
    taskList.innerHTML = null;
}

// localStorage.setItem("tasks", "Hello");

// console.log(localStorage.getItem("tasks"));




// var arr = [1,2,3,4,5];

// var arrString = JSON.stringify(arr);

// var stringToArr = JSON.parse(arrString);

// console.log(arrString);
// console.log(stringToArr);