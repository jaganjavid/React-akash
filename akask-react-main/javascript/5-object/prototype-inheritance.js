function Person(firstName, lastName){ // parent
    this.firstName = firstName;
    this.lastName = lastName;
}


// Greeting
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}


const javid = new Person("Jagan", "Javid");


// Customer Object

function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype methods to customer
Customer.prototype = Object.create(Person.prototype);
const javidCustomer = new Customer("Jagan", "Javid", "555-555-5555", "standard");

// Make Customer prototype return Customer()

Customer.prototype.constructor = Customer;


// console.log(javidCustomer.greeting());

// Customer Greeting
Customer.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(javidCustomer.greeting());

