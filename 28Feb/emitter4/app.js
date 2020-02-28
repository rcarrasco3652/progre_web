// Se va a cambiaro todo el codigo a la notacion de EC6 Clases

'use strict';

var EventEmitter = require('events')
var util = require('util')

class Greetr extends EventEmitter{
    constructor() {
        super();
        this.greeting = 'Hello world'
    }

    greet(data){
        console.log(`${this.greeting}: ${data}`)
        this.emit('greet', data)
    }

}
let data = 'corona'

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log(`someone greeted ${data}`)
});

greeter1.greet(data);




// function Greetr(){
//     this.greeting = 'Hello world'
// }
// util.inherits(Greetr, EventEmitter)

// Greetr.prototype.greet = function(data){
//     console.log(this.greeting+': '+data)
//     this.emit('greet', data)
// }

// var greeter1 = new Greetr();
// greeter1.on('greet', function(data){
//     console.log('someone greeted '+ data)
// })

// greeter1.greet('Tony')  