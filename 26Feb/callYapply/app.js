var obj = {
    name: 'John Doe',
    greet: function(name2,name3) {
    console.log(`Hello ${this.name}, ${name2}, ${name3}`)
    }
}
var name2 = 'Jacqui'
var name3 = 'Lalo'

obj.greet(name2,name3);
// Invocamos la funcion call sobre la funcion greet y sobre escribo la funcion con lo que le mando de valor
obj.greet.call({name: 'Jane Doe'}, name2,name3)
obj.greet.apply({name: 'Roberto Carasco'}, [name2,name3])