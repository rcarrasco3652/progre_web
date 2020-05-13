const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//     res.render('index');
// })


// En la funcion get primero se pone la ruta y despues la respuesta
app.get('/person/:id', (req, res) => {
    res.render(`index`,{ID: req.params.id});
    
})

app.listen(port, () => {
    console.log (`Escucho en el puerto ${port}`)
})