const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String
},{
    versionKey:false
})

const userModel = mongoose.model("authentication", UserSchema);

module.exports = {
    userModel
}