// Decalaracion de funciones nivel 1

// function greet(){
//     console.log('hi');
// }
// greet();


// Declaracion de funcion nivel 2 (arrow -> fuction)

// let greet = () => {
//     console.log('Hi');
// }
// greet();


// Declaracion de funcion nivel 3 

// logGreeting(greet);

// function logGreeting(fn){
//     fn();
// }

// function greet(){
//     console.log('hi');
// }

// string literals

// let hola = (() => {
//     console.log("hello")
// });
// console.log(`${hola} corazon como estas?`)


// Declaracion de funciones nivel 4 

// function greet(){
//     console.log('hi');
// }

// function logGreeting(fn){
//     fn();
// }

// let logGreeting = (fn) => {
//     fn();
// }

// let logGreeting = fn => fn();

// logGreeting(greet);


// functions expressions on the fly

let logGreeting = (() => {
    console.log('Hi');
});

logGreeting();