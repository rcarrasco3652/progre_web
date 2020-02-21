// se hizo un require a las librerias de node en donde nos jalamos un objeto
var Emitter = require('events');
var eventConfig  = require('./config').events;

// creamos el objeto Emmitter para acceder a sus propiedades
var emtr = new Emitter();

// Mediante la propiedad "on" que es una funcion, pasamos dos paeametros la palabra greet que se encuentra dentro de la variable eventConfig
// y la funcion que queremos ejecutar cuando este sea mandado a llamar
emtr.on(eventConfig.GREET, () => console.log('Somewehere, someone said hello'));

emtr.on(eventConfig.GREET, () => console.log('A greeting ocurred!'));

console.log('Hello');

// Mandamos a llamar la propuedad que imprime las funciones que mandamos con anterioridad
emtr.emit(eventConfig.GREET);