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

    if(localStorage.getItem("tasks") === null){ // there is no element
        // Run If there no element
        tasks = [];
        console.log("1")
    } else {
        // After Every time run
        tasks = JSON.parse(localStorage.getItem("tasks"));
        console.log("2")
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks)); // string

}


function removeTask(e){
    if(e.target.parentElement.className === "delete-item secondary-content"){
        e.target.parentElement.parentElement.remove();
        // e.i.a.li.remove();

        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }  
}

function removeTaskFromLocalStorage(taskElement){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index){
    if(taskElement.textContent === task){
        tasks.splice(index, 1);
    }
  })

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearTask(){
    taskList.innerHTML = null;
    // Clear from Ls
    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// var arr = [1,2,3,4,5];

// Remove
// var result = arr.splice(1,2);

// Add 
// arr.splice(1,1,[1,2,3]);

// console.log(arr);

// localStorage.setItem("test", arr);

// var get = localStorage.getItem("test"); 
// get.push(6);
// console.log(arr);
// console.log(get);