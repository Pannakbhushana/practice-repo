const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
    email:String,
    password:String
},{versionKey:false})

const AuthModel = mongoose.model("auth", authSchema);

module.exports = {
    AuthModel
}