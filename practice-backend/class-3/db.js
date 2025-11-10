const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.mongoUrl)

const UserSchema = mongoose.Schema({
    name:String,
    age:String,
    city:String,
    language:String
},{
    versionKey:false
})

const userModel = mongoose.model("user", UserSchema)

module.exports = {
    connection,
    userModel
}