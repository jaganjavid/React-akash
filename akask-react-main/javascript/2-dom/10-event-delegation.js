// Event delegation

// The idea is that if we have a lot of elements handled in a 
// similar way, then instead of assigning a handler to each of 
// them – we put a single handler on their common ancestor.

// In the handler we get event.target to see where the 
// event actually happened and handle it.

const delItem = document.querySelector(".delete-item");

document.body.addEventListener("click", deleteItem);

function deleteItem(event){
    const classList = event.target.parentElement.classList;
    // if(event.target.parentElement.className === "delete-item secondary-content"){
    //     event.target.parentElement.parentElement.remove();
    // }

    if(classList.contains("delete-item")){
        event.target.parentElement.parentElement.remove();
    }

    
}