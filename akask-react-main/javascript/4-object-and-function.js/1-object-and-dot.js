var person = new Object();


person["firstName"] = "Jagan"; // property
person["lastName"] = "Javid";
person.age = 25; // ***

person.address = new Object();
person.address.street = "111 main st";
person.address.city = "Chennai";
person.address.state = "TN";

// Methode

person.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

console.log(person.firstName);
console.log(person.address.street);
console.log(person.getFullName());