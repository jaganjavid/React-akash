function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Get Full Name

Person.prototype.fullName = function(){
 return this.firstName + " " + this.lastName; // methode
};

const javid = new Person("Jagan", "Javid");

console.log(javid.fullName());
console.log(javid);


// javid.__proto__.__proto__.fullName = function(){
//     return this.firstName + " " + this.lastName; // methode
// };

