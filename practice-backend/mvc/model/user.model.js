const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:String,
    age:String,
    city:String,
    language:String
},{
    versionKey:false
})

const userModel = mongoose.model("user", UserSchema);

module.exports = {
    userModel
}