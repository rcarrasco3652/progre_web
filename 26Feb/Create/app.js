var Person = {
    fisrtname: '',
    lastname: '',
    greet: function() {
    return `${this.fisrtname} ${this.lastname}`
    }

}
// El object create es otra manera de crear un objeto 
// y recibe como parametro un object literal unas vez guardado el objeto puedo cambiar sus parametros
var john = Object.create(Person)
john.fisrtname = 'John'
john.lastname = 'Doe'

var jane = Object.create(Person)
jane.fisrtname = 'Jane'
jane.lastname = 'Doe'

console.log(john.greet());
console.log(jane.greet())



