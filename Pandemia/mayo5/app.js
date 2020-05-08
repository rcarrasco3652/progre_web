const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send(`<html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>`);
})


// En la funcion get primero se pone la ruta y despues la respuesta
app.get('/person/:idProducto', (req, res) => {
    res.send(`<html><head><title>Page Title</title><link href=/assets/style.css type=text/css rel=stylesheet></head><body><h1>El id enviado es : ${req.params.idProducto}</h1><p>My first paragraph.</p></body></html>`);

})

app.listen(port, () => {
    console.log (`Escucho en el puerto ${port}`)
})