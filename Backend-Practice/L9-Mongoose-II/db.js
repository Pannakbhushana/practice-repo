const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb://127.0.0.1:27017/selfpractice");

const userSchema=mongoose.Schema({
    name:String,
    age:Number
},{
    versionKey:false
});

const UserModel=mongoose.model("user",userSchema);

module.exports={connection,UserModel}