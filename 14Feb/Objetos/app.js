var person = {
    firstname: 'Jonh',
    lastname: 'Doe',
    greet: function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    }
};

person.greet();
console.log(person['firstname'])