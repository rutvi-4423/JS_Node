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

module.exports = Person;