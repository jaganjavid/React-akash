const http = new EasyHTTP();

http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err))

// User Data

const data = {
    name : "John Doe",
    username : "johnDoe_",
    email:"john@gmail.com"
}

// Create post 
http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err));


// Update post 
http.put("https://jsonplaceholder.typicode.com/users/5", data)
.then(data => console.log(data))
.catch(err => console.log(err));

// Delete post 
http.delete("https://jsonplaceholder.typicode.com/users/1")
.then(data => console.log(data))
.catch(err => console.log(err));

