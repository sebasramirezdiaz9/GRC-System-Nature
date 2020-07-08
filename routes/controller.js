var admin = require("firebase-admin");
var serviceAccount = require("./../grc-nature-firebase-adminsdk-8wv8j-d90d6d5d52.json");
var admin = require("firebase-admin");
const nodemailer = require("nodemailer");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://grc-nature.firebaseio.com"
  });

var firebase = admin.database();  

//Method user into controller
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
  };

const controller = {
    // Get Users list
    listAllUsers(req, res) {
        // List batch of users, 1000 at a time.
        admin.auth().listUsers(1000)
          .then(function(listUsersResult) {
              res.status(200).send(listUsersResult);
          })
          .catch(function(error) {
            console.log('Error listing users:', error);
          });
      },
      // Get QR
      getQr(req, res){
        var data;
        firebase.ref('productos').on('value', function(dataSnapshot) {
          data = dataSnapshot.val();
          res.status(200).send(data);
        })
        
      },
      //Send Mail
      sendMailApi(req, res){
        let user = req.body;
        sendMail(user, info => {
          console.log(`El email ha sido enviado ${info.messageId}`);
          res.send(info);
        });
      },
      updateUser(req, res){
        console.log(req.body);
        if (req.body.password != null && req.body.password != '') {
          var query = {
            email: req.body.email,
            password: req.body.password
          }
        } else {
          var query = {
            email: req.body.email,
          }
        }
        admin.auth().updateUser(req.body.uid, query)
        .then(function(userRecord) {
          res.status(200).send(query);
        })
        .catch(function(error) {
          res.status(500).send(error);
        });
         
      },
      deleteUser(req, res) {
        admin.auth().deleteUser(req.query.uid)
        .then(response => {
          res.status(200).send('Operacion Exitosa')
        })
        .catch(err => {
          res.status(400).send('Error en el servidor');
        });
      }
}

module.exports = controller;