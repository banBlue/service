var express = require("express");
var router = express.Router();

var controllers = require('../controllers/article_controllers.js');

router.get('/article/add',controllers.articleShowAdd)
.post('/article/add',controllers.articleAdd)
.get('/article/edit',controllers.articleShowEdit)
.get('/article/info',controllers.articleInfo)
.post('/article/edit',controllers.articleUpdateEdit);

module.exports  = router;