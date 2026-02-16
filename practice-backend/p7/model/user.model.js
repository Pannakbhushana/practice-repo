const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    age:{type:String, required:true},
    city:{type:String, required:true},
    language:{type:String, required:true}
},{versionKey:false});

const UserModel = mongoose.model("user", userSchema);

module.exports = {UserModel}