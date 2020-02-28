'use strict'

let EventEmitter = require('events')

class Person {
    constructor(){
        this.firstName = 'John'
        this.lastName = 'Doe';
    }

    greet(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

class Policenman extends Person {
    constructor(){
        super();
        this.badgenumber = '1234'
    }

    placa() {
        console.log(`El numero de placa es ${this.badgenumber}`)
    }
}
// util.inherits(Policenman, Person)
let officer = new Policenman()
officer.greet()
officer.placa()
// function Person(){
//     this.firstName = 'John';
//     this.lastName = 'Doe';
// }

// Mediante el metodo de prototype agregamos una funcion al objeto Person 
// Person.prototype.greet = function() {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);

// }

// function Policenman() {
    // En esta linea mandamos a llamar a todas las propiedadwes del objeto Person
    // Ya que este es el objeto o clase padre
//     Person.call(this)

//     this.badgenumber = '1234'
// }

// Policenman.prototype.placa = function(){
//     console.log(`El numero de placa es ${this.badgenumber}`)
// }

// util.inherits(Policenman, Person)
// var officer = new Policenman()
// officer.greet()