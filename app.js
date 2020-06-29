const express = require('express');
const bodyParser = require('body-parser');
const app = express(), port = 3080;
const router = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(process.cwd()+"/resources/dist/WebPage/"));

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/resources/dist/WebPage/index.html");
});

app.listen(port, () => {
    console.log('Servidor en el puerto ' + port);
});

app.use(router);
  
  