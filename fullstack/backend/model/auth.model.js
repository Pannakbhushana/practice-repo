const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    userName:String,
    email:String,
    password:String
},{
    versionKey:false
});

const authModel = mongoose.model("authentication",AuthSchema);

module.exports = {
    authModel
}