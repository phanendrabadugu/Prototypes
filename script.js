// Prototypes

// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);

// }

// Prototype

// Person.prototype.calculateAge = function(){
//         const diff = Date.now()-this.birthday.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getFullYear() - 1970);
// }

// Person.prototype.getFullName = function(){

//     return `${this.firstName} ${this.lastName}`
// }

// Person.prototype.newLastName = function(newLastName){
//     this.lastName = newLastName;
// }

// const john = new Person("John", "Doe", "8-12-90");
// const mary = new Person("Mary","Johnson", "March 20 1978");

// mary.newLastName("Raja");
// console.log(mary);
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty("firstNam"))

function Person1(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person1.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  Person1.prototype.reverseFullName = function () {
    return `${this.lastName} ${this.firstName}`;
  };

const Jhon = new Person1("Jhon", "Doe");

//console.log(Jhon);

function Person2(firstName,lastName, phone, membership){
    Person1.call(this,firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}


//if we want to inherit methods of person1 

Person2.prototype = Object.create(Person1.prototype)

//Make Person2.prototype return Person2()

Person2.prototype.constructor = Person2;

const Doe = new Person2("Raja","doe",2345553, 2344);

//Person.greeting

Person2.prototype.greeting= function () {
    return `${this.firstName} ${this.lastName} welcome to onboard`;
  };

//console.log(Doe.fullName());

//console.log(Jhon);
console.log(Doe.greeting());
console.log(Doe.reverseFullName());
