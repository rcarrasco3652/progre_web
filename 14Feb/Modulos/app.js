var greet = require('./greet')
greet();

var greet2 = require('./greet2').greet
greet2();

/* Regresa un objeto contruido */
var greet3 = require('./greet3');
/* Accedo al metodo mediante la notacion del punto*/
greet3.greet();
/* Sobre escribes el atributo greeting */
greet3.greeting = `Change hello world!`
var greet3b = require('./greet3')
greet3b.greet();

/**Regresa un contructor y solo es cuestion de crear la clase para poder usarla */
var Greet4 = require('./greet4')
var grtr = new Greet4('Roberto');
grtr.greet();

