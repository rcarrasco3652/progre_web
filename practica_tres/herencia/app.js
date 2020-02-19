function Person(firstname, lastname){
    
    this.firstname = firstname;
    this.lastname = lastname;
}
// Prototipo que extiende a la clase Person
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`)
}
//Creamos una variable que aloja un objeto Person
var John = new Person('John', 'Doe')
console.log(John.firstname+" "+John.lastname);
// Se manda a llamar la nueva funcionalidad del prototype
John.greet();

var Jane = new Person('Jane', 'Doe')
Jane.greet();