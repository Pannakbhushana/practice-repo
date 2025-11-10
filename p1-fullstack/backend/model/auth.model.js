const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:[true, "password is required"]}
},
{
    versionKey:false
});

const AuthModel = mongoose.model("auth", authSchema);

module.exports = {AuthModel};