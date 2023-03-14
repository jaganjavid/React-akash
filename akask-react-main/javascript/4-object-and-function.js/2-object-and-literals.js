var person = {
    firstName: "Jagan",
    lastName: "Javid",
    age: 25,
    address: {
        street: "222 main st.",
        city: "Chennai",
        state: "TN"
    },
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var person2 = {
    firstName: "Arun",
    lastName: "Kumar",
}


function greet(obj, obj2){
    console.log(obj.getFullName());
    console.log(obj2.firstName);
}

greet(person, person2);


console.log(person.firstName);
console.log(person.getFullName());
