var Emitter = require('./emiter')
var emtr = new Emitter();

emtr.on('greet', function () {
    console.log('Somewehere, someone said hello');
});

emtr.on('greet',function () {console.log('A greeting ocurred!')});

console.log('Hello')
emtr.emit('greet');