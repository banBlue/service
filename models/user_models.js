var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    email:{type:String,required:true,index:true,unique:true},
    password:{type:String,required:true},
    nickname:{type:String,required:true,index:true,unique:true}
},{timestamps:true});

//创建集合
var userModel = mongoose.model('user',userSchema);

//导出对象
module.exports = userModel;