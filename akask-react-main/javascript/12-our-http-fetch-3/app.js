const http = new EasyHTTP();

// GET USER
http.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data))
.catch(err => console.log(err));


const data = {
    name: "Mohamed Javid",
    userName:"JaganJavid",
    email:"jaganjavid@gmail.com"
}

// Create User

http.post("https://jsonplaceholder.typicode.com/users", data)
.then(data => console.log(data))
.catch(err => console.log(err))


http.put("https://jsonplaceholder.typicode.com/users/1", data)
.then(data => console.log(data))
.catch(err => console.log(err))


http.delete("https://jsonplaceholder.typicode.com/users/6")
.then(data => console.log(data))
.catch(err => console.log(err))