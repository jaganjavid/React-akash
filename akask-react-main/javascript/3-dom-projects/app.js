// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Load All Event Listeners

loadEventListerners();

function loadEventListerners(){
    // Add Task Event
    form.addEventListener("submit", function(e){
        e.preventDefault();
        if(taskInput.value === ""){
            alert("Please fill the form");
            return false;
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
        
        // Clear task Input
        taskInput.value = "";
        }
    });
  
}


