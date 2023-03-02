// document.querySelector(".clear-tasks").addEventListener("click", function(){
//     alert("hey")
// })

document.querySelector(".clear-tasks").addEventListener("click", onClick);
let count = 0;
document.getElementById("task-title").textContent = count;

function onClick(event){

    count++;
    // if(count === 1){
    //     document.querySelector(".card-action").classList.add("rest");
    // } else if(count === 2){
    //     document.querySelector(".card-action").classList.remove("rest");
    // }
    document.querySelector(".card-action").classList.toggle("rest");
    document.getElementById("task-title").textContent = count;
    
}