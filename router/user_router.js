var express = require("express");
var router = express.Router();

var controllers = require('../controllers/user_controllers.js');

router.get('/login',controllers.login)
.post('/login',controllers.doLogin)
.get('/register',controllers.register)
.post('/register',controllers.doRegister)
.get('/logout',controllers.logout);

module.exports = router;