var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

const prefix = '/api';

  router.post(prefix + "/sendmail", (req, res) => {
    console.log("request came");
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