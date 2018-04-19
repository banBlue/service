var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title:{type:String,required:true},
    articleType:{type:String,required:true},
    content:{type:String,required:true}
},{timestamps:true});

//创建集合
var articleModel = mongoose.model('article',articleSchema);

//导出对象
module.exports = articleModel;