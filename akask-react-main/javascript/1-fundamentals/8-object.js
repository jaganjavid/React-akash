const person = {
    // Properties
    firstName: "Jagan", // name and value pairs or key and value pairs
    lastName : "Javid",
    age: 25,
    email: "jagan@gmail.com",
    hasKids: true,
    hobbies: ["music", "sports"],
    address:{
        city: "Chennai",
        state: "TN"
    },
    // Methode
    getFullName: function(){
       return person.firstName + " " + person.lastName;
    }
}

let val;

val = person;

// Get a Specific value

val = person.firstName; //***
val = person["lastName"];
val = person.age;
val = person.email;
val = person.hasKids;
val = person.hobbies[1];
val = person.address.city;
val = person.getFullName();


console.log(val);