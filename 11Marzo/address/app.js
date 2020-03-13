const request = require('request');
const random = require('number-random');
var fahrenheitToCelsius = require('fahrenheit-to-celsius');


let direccion = require('./addres');
let dir = direccion.direcciones[random(0,20)]

let url3 = `http://www.mapquestapi.com/geocoding/v1/address?key=A18LQu5IgsumxOHFc8ipuiGTtJ70JQI7&location=${dir.address.number}+${dir.address.street}+${dir.address.state}`
let url = `https://swapi.co/api/people/${random(1,90)}/`;

request({url: url3, json: true}, (error, response) => {
    if(!error){
        let url2 = `https://api.darksky.net/forecast/4542350ba52da2433a85f5789bb378cf/${response.body.results[0].locations[0].latLng.lat},${response.body.results[0].locations[0].latLng.lng}?lang=es`    

        request({url: url2, json: true}, (error, response) => {
            this.lat = response.body.latitude;
            this.lng = response.body.longitude;
            this.temp = response.body.currently.temperature;
            
            request({url: url, json: true}, (error, response) => console.log(`${response.body.name} vive en la calle ${dir.address.street} y hace ${Math.floor(fahrenheitToCelsius(this.temp))}°C de temperatura con latitud: ${this.lat} y longitud ${this.lng}`));

        });
    };
    
});

// request({
//     url,
//     json: true
// }, (error, response) => {

//     this.name =response.body.name

//     request({url: url2, json: true}, (error, response) => {
//         if(!error){
//             this.part2 =`${this.name} vive en la calle ${dir.address.street} y hace ${Math.floor(fahrenheitToCelsius(response.body.currently.temperature))}°C`
   
//             request({url:url3, json: true}, (error, response) => {
//                 console.log(`${this.part2} con latirud: ${response.body.results[0].locations[0].latLng.lat} y longitud ${response.body.results[0].locations[0].latLng.lng}`)
//             })
            
//                  }
    
//     })

 
// });