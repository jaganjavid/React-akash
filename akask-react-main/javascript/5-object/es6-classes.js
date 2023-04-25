class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName)
        this.phone = phone;
        this.membership = membership;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
    }
}

const javid = new Person("jagan", "javid");
const josh = new Customer("josh", "sri", "555-555-5555","standard");

console.log(javid.greeting())
console.log(josh.greeting())