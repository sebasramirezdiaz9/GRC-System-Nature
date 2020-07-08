var express = require('express');
var router = express.Router();
const controller = require('./controller');
const prefix = '/api';

  router.delete(prefix + '/users', controller.deleteUser);

  router.put(prefix + '/users', controller.updateUser);

  router.get(prefix + '/users', controller.listAllUsers);

  router.get(prefix + "/dataqr", controller.getQr);

  router.post(prefix + "/sendmail", controller.sendMailApi);

module.exports = router;