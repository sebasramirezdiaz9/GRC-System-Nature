const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const router = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

app.listen(3080, (err, res) => {
    if (err) {
        console.log('Error al levantar servidor')
        return;
    }
    console.log('Apis escuchando en el puerto 3080')
});

app.use(router);
  
  