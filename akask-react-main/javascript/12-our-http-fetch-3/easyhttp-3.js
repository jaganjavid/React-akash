class EasyHTTP {
    // Make an HTTP Request

    async get(url){
        const respone = await fetch(url);
        const resData = await respone.json();

        return resData;
    }

    // Create User

    async post(url, data){
        const respone = await fetch(url, {
            method:"POST",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        });

        const resData = await respone.json();

        return resData;
    }

    // Upadte User

    async put(url, data){
        const respone = await fetch(url, {
            method:"PUT",
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify(data)
        });

        const resData = await respone.json();

        return resData;
    }


    // Delete User

    async delete(url, data){
        const respone = await fetch(url, {
            method:"DELETE",
            headers: {
                "Content-type" : "application/json"
            },
        });

        const resData = await "Resourse Deleted";

        return resData;
    }
}