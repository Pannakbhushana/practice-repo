const mongoose = require("mongoose");


const UserSchema= mongoose.Schema({
name :String,
email:String,
role:{
    type:String,
    enum:["user", "admin", "moderator"],
    default:"user",
},
status:{
    type:String,
    enum:["active", "inactive"],
    default:"active"
},
avatar:String,
description:String,
},
{
    versionKey:false

});

const userModel = mongoose.model("fullstack", UserSchema );

module.exports = {
    userModel
}

