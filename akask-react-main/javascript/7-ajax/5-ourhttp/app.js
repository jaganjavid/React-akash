const http = new ourHttp();

// Get post 
// http.get("https://jsonplaceholder.typicode.com/users/", function(err, posts){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(posts);
//     }
// })

// Get single user 
// http.get("https://jsonplaceholder.typicode.com/users/1", function(err, posts){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(posts);
//     }
// })

// // Create post

const data = {
    title : "Custom Post",
    body: "This is my Custom post"
}

// http.post("https://jsonplaceholder.typicode.com/users", data, function(err, post){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(post);
//     }  
// })

// http.put("https://jsonplaceholder.typicode.com/users/4", data, function(err, post){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(post);
//     }  
// })

http.delete("https://jsonplaceholder.typicode.com/users/5",function(err, post){
    if(err){
        console.log(err)
    } else {
        console.log(post);
    }  
})
