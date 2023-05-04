const github = new Github();

const ui = new UI();

const user = document.getElementById("submit-button");

user.addEventListener("click", (e) => {
    // Get the input value
    let userText = document.querySelector("#serachUser").value;
    if(userText !== ""){
        github.getUser(userText)
        .then(data => {
            ui.showProfile(data);
            document.querySelector("#serachUser").value = "";
        }).catch(error => console.log(error)) 
    }

    
})