const ul = document.querySelector(".jokes");
const input = document.querySelector("#categories-input");

const buttonArr = [
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel"
]

function xhrFunction (url){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function(){
        if(this.status === 200){
            const result = JSON.parse(this.responseText);
    
            const joke = result.value;
            
            const li = document.createElement("li");
    
            li.appendChild(document.createTextNode(joke));
    
            ul.appendChild(li);
            
            input.value = "";
        }
    }
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function(){
    const randomApi = "https://api.chucknorris.io/jokes/random";
    
    xhrFunction(randomApi);

    buttonArr.forEach(function(item){
        const btnWrapper = document.querySelector(".all-btn");
        const btn = document.createElement("button");

        btnWrapper.style.display = "flex";
        btnWrapper.style.gap = "10px";
        btn.className = "categorie-btn"
        btn.innerText = item;
        btnWrapper.appendChild(btn);
    })

    const allBtn = document.querySelectorAll(".categorie-btn");

    allBtn.forEach(function(btn){
        btn.addEventListener("click", function(e){
            input.value = e.target.innerText;
        })
    })

})

document.getElementById("joke-form")
.addEventListener("submit", getJokes);

function getJokes(e){
    e.preventDefault();
    
    const getInput = input.value;    

    if(getInput === ""){
        alert("Please select button");
        return;
    }

    const getCategories = `https://api.chucknorris.io/jokes/random?category=${getInput}`;

    xhrFunction(getCategories);
    
}