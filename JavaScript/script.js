// function Person(first_name, last_name, dob) {
//     this.first_name = first_name;
//     this.last_name = last_name;
//     this.dob = new Date(dob);
// }

// Person.prototype.full_name = function() { return `${this.first_name} ${this.last_name}`};

class Person {
    constructor(first_name, last_name, dob) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = new Date(dob); 
    }

    full_name() {
        return `${this.first_name} ${this.last_name}`
    }
}

person1 = new Person('Tech', 'Holding', '2-2-2015');
console.log(person1.full_name());
console.log(person1);