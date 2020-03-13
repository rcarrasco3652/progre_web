// Primero instalamos la dependencia
const request = require('request')
// Jalamos una libreria o dependecia que nos ayuda a comvertir los grados
var fahrenheitToCelsius = require('fahrenheit-to-celsius');

const url = 'https://api.darksky.net/forecast/4542350ba52da2433a85f5789bb378cf/19.14,-102.46?lang=es'


// request tiene dos parametros 
// 1.- Un object literal si solo tengo un value puedi dejarlo sin su key en caso de que sean dos o mas pues e ponen sus respectivos key: value
// 2.- Es un callback que se llama en caso de que haya un error
request({url, json: true}, (error, response) => {
    // Validó si existe un erro (si no hay error) entonces ejecuto mi respuesta
    if(!error){
       
        // -- En este caso ya viene con el objeto parseado y tenemos que acceder a la temperatura desde el respose y el body
        console.log(response.body.daily.data[0].summary, Math.floor(fahrenheitToCelsius(response.body.currently.temperature)))
    }
});

request({url}, (error, response) => {
    // para parcear el body de la respuesta
    const data = JSON.parse(response.body)

    // Validó si existe un erro (si no hay error) entonces ejecuto mi respuesta
    if(!error) {
         // -- Mandamos a llamar a la funcion que convierte los grados y despues accedemos al dato mediante la notacion del punto
        console.log(`${Math.floor(fahrenheitToCelsius(data.currently.temperature))}`)
    }
})

request({url: url, json: true}, (error, response) => console.log(response.body.daily.data[0].summary, Math.floor(fahrenheitToCelsius(response.body.currently.temperature))))
