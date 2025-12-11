const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userName:{type:String, required:true},
    postImg:{type:String, required:true},
    title: {type:String, required:true},
    description:{type:String, required:true},
    body: {type:String, required:true}
},{versionKey:false})

const PostModel = mongoose.model("post", postSchema);

module.exports = {PostModel}