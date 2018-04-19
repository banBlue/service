var controllers = module.exports;
var articleModel = require('../models/article_models.js');

//展示添加页面
controllers.articleShowAdd = function(req,res){
    res.render('article/articleAdd.html');
}

//添加页面加入数据
controllers.articleAdd = function(req,res){
    //添加
    articleModel.create(req.body,function(err,article) {
        if(err) {
            res.json({
                err_code:500,
                message:err.message
            })
        }else {
            res.json({
                err_code:0,
                message:article
            })
        }
    })
}

//展示编辑页面
controllers.articleShowEdit = function(req,res){
    articleModel.findById(req.query.id,function(err,article){
        console.log(article);
        res.render('article/articleEdit.html',{article:article})
    })
}

//保存编辑页面
controllers.articleUpdateEdit = function(req,res){
    articleModel.update(req.query.id,req.body,function(err,article){
        if(err) {
            res.json({
                err_code:500,
                message:err.message
            })
        }else {
            res.json({
                err_code:0,
                message:article
            })
        }
    })
}

//展示详细信息页面
controllers.articleInfo = function(req,res){
    articleModel.findById(req.query.id,function(err,article){
        res.render('article/articleInfo.html',{article:article})
    })
}