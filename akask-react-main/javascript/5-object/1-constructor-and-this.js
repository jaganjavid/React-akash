function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function(){
        return this.firstName + " " + this.lastName; // methode
    }
}

const person1 = new Person("Jagan", "Javid");
const person2 = new Person("John", "doe");


console.log(person1);
console.log(person2.fullName());
console.log(person1);


