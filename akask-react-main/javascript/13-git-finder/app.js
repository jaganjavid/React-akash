const github = new Github();


const user = document.getElementById("submit-button");




user.addEventListener("click", (e) => {
    // Get the input value
    const userText = e.target.value;



    if(userText !== ""){
        console.log("hello")
        github.getUser(userText)
        .then(data => {
            console.log(data);
        }).catch(error => console.log(error)) 
    }
})