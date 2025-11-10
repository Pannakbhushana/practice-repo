const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    age:String,
    city:String,
    language:String
},{
    versionKey:false
})

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel
};