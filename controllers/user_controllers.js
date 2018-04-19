var controllers = module.exports;
var userModel = require("../models/user_models.js");

//展示登录页面
controllers.login = function(req,res){
    res.render('login.html');
}

//进行登录
controllers.doLogin = function(req,res){
    var body = req.body;
    userModel.find({email:body.email,password:body.password},function(err,user){
        if(err){
            res.json({
                err_code:1001,
                err_message:err.message
            })
        }

        if(user.length == 1){
            req.session.user = user[0];
            res.json({
                err_code:1000,
                err_message:"登录成功"
            })
        }else {
            res.json({
                err_code:10001,
                err_message:'您的账号或者密码有误'
            })
        }
    })
}

//展示注册页面
controllers.register = function (req,res){
    res.render('register.html');
}

//进行注册
controllers.doRegister = function (req,res){
    var body = req.body;
    console.log(body)
    userModel.find({email:body.email},function(err,user){
        if(err){
            res.json({
                err_code:2001,
                err_message:err.message
            })
        }
        if(user.length == 1){
            res.json({
                err_code:2001,
                err_message:"该账号已存在"
            })
        }else {
            userModel.create(body,function(err,user){
                if(err){
                    res.json({
                        err_code:2001,
                        err_message:err.message
                    })
                }

                res.json({
                    err_code:2000,
                    err_message:"已添加成功"
                })
            })
        }
    })

}

//注销用户
controllers.logout = function(req,res){
    req.session.user = null;
    //域名重定向
    res.writeHead(302,{
        'Location':'/login'
    })
    res.end();

}