class UI {
    constructor(){
        this.profile = document.getElementById("profile");
    }

        // Display Profile User

        showProfile(user){
            this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src= ${user.avatar_url} alt="">
                        <a href= ${user.html_url} target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos : ${user.public_repo}</span>
                        <span class="badge badge-secondary">Followers : ${user.followers}</span>
                        <span class="badge badge-info">Following : ${user.following}</span>
                        <br>
                        <br>

                        <ul class="list-group"> 
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                            <li class="list-group-item">location: ${user.location}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
        }
  
}