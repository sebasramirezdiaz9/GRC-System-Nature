var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");
var admin = require("firebase-admin");

var serviceAccount = require("./../grc-nature-firebase-adminsdk-8wv8j-d90d6d5d52.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://grc-nature.firebaseio.com"
});

var firebase = admin.database();

const prefix = '/api';

  router.get(prefix + "/dataqr", (req, res) => {
    var data;
    firebase.ref('productos').on('value', function(dataSnapshot) {
      data = dataSnapshot.val();
      res.send(200, data);
    })
    
  });

  router.post(prefix + "/sendmail", (req, res) => {
    let user = req.body;
    sendMail(user, info => {
      console.log(`El email ha sido enviado ${info.messageId}`);
      res.send(info);
    });
  });


  async function sendMail(user, callback) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: 'grc.nature.contact@gmail.com',
        pass: 'grcnature1234'
      }
    });

    let mailOptions = {
        from: 'Contacto' , // sender address
        to:   'grc.nature.contact@gmail.com', // list of receivers
        subject: "Informacion sobre GRC NATURE", // Subject line
        html: `<p>Nombre ${user.name}<p>
               <p>Apellidos: ${user.lastname}</p>
               <p>Email: ${user.email}  </p>
               <p>Mensaje: ${user.message}  </p>`
      };
    
      let info = await transporter.sendMail(mailOptions);
    
      callback(info);
    }



module.exports = router;