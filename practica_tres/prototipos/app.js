// Un objeto puede alojar tanto tipos de datos como boleans, strings o numbers
var obj = {
    greet: 'Hello',
    evento: ()=> console.log('how are you?')
}

console.log(obj.greet)
console.log(obj['greet'])
var prop = 'greet'
console.log(obj[prop])

var event = 'evento'
obj[event]();

// Podemos llenar un array de puras funciones si asi lo desearamos
var arr =[];

arr.push(() => console.log('hellos world 1'));
arr.push(() => console.log('hello world 2'));
arr.push(() => console.log('hellos world 3'))

arr.forEach((item) => item())