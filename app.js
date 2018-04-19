var path = require('path');
var express = require("express");
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');

var app = express();

//
var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: '_MGo',
    keys: ['2342323'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 
  }))

//连接数据库
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/M');
var articleModel = require('./models/article_models.js');

//引入全局网站icon
app.use(favicon(path.join(__dirname, 'public', 'avtor.ico')));

//引入中间件能够解析post数据
app.use(bodyParser.urlencoded({ extended: false }));

//模板引擎
app.engine('html', require('express-art-template'));
app.set('view engine', 'html');

//托管静态资源
app.use('/public', express.static('public'));
app.use('/node_modules',express.static('node_modules'));

//导入路由模块
app.use(require('./router/article_router.js'));
app.use(require('./router/user_router.js'));

app.get('/',function(req,res){
    articleModel.find(function(err,article){
        console.log({user:req.session.user})
        res.render('index.html',{articles:article,user:req.session.user});
    })
})

app.listen(3001,function(){
    console.log("success");
})

