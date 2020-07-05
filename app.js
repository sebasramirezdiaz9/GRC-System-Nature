const express = require('express');
const bodyParser = require('body-parser');
const app = express(), port = 3080;

const router = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(process.cwd()+"/resources/dist/WebPage/"));

app.use(router);

app.get('/*', (req,res) => {
    res.sendFile(process.cwd()+"/resources/dist/WebPage/index.html")
  });

app.listen(process.env.PORT || port, (err,res) => {
    if (err) {
        console.log('Error al levantar el servidor');
        return;
    } 
    console.log('Servidor en el puerto 3080');
});


  
  