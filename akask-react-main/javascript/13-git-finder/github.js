class Github {
    constructor(){
        this.client_id = "e666e97be30c2f8cf5d7";
        this.client_secret = "75af1d39a887acf6478f3f555bb45a002b26fb3e";
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
        &client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile
        }
    }
    
}

