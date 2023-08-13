const mongoose=require("mongoose");
require("dotenv").config()

const connection=mongoose.connect(process.env.mongoURL);

const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String
},{
    versionKey:false
});

const UserModel=mongoose.model("user",userSchema);

module.exports={connection,UserModel}