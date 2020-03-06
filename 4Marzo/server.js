// let http = require('http');

// http.createServer((req, res) => {
//     // Escribiendo los heads del paquete http 
//     res.writeHead(200, {
//         // Tipo del paquete es texto plano
//         'Content-Type': 'text/plain'
//     });
//     //
//     res.end('hello world\n')

// //
// }).listen(1337,'127.0.0.1');


let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    // Escribiendo los heads del paquete http 
    res.writeHead(200, {
        // Tipo del paquete es texto plano
        'Content-Type': 'text/html'
    });
    let html = fs.readFileSync('C:/Users/Roberto Carrasco/Desktop/EssUStore/index.html')
    //
    res.end(html)

//
}).listen(1337,'127.0.0.1');