document.getElementById("button-1").addEventListener("click", getText);
document.getElementById("button-2").addEventListener("click", getJson);
document.getElementById("button-3").addEventListener("click", ExternalAPI);


function getText(){
    fetch("text.txt").then(function(res){
        return res.text();
    }).then(function(data){
        // console.log(data);
        document.getElementById("output").innerHTML = data;
    }).catch(function(err){
        console.log(err);
    })
}


function getJson(){
    fetch("posts.json").then(function(res){
        return res.json();
    }).then(function(data){
        let output = "";

        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        });

        document.getElementById("output").innerHTML = output;
    }).catch(function(err){
        console.log(err);
    })
}

function ExternalAPI(){
    fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
        return res.json();
    }).then(function(data){
        let output = "";

        data.forEach(function(post){
            console.log(post)
            output += `<li>${post.name}</li>`
        });

        document.getElementById("output").innerHTML = output;
    }).catch(function(err){
        console.log(err);
    })
}