class EasyHTTP {

    // Make a HTTP Get Request

    get(url){
        return new Promise((resolve, reject) => {
           fetch(url)
           .then(res => res.json())
           .then(data => resolve(data))
           .catch(err => reject("Some thing went worng"));
        })
    }

    // Create Post

    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "applicayion/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // Update
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content-type": "applicayion/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }

    // Delete
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "applicayion/json"
                }
            })
            .then(res => res.json())
            .then(data => resolve("Resource Deleted"))
            .catch(err => reject(err))
        })
    }
}