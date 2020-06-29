const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const router = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(express.static(__dirname));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + 'resources/src/index.html'));
});
app.listen(process.env.PORT||3080, (err, res) => {
    if (err) {
        console.log('Error al levantar servidor')
        return;
    }
    console.log('Apis escuchando en el puerto 3080');
    console.log(__dirname);
});

app.use(router);
  
  