const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"auth",
      required:true
    },
    title:{type:String, required:true},
    content:{type:String, required:true}
},{
    versionKey:false
})

const PostModel = mongoose.model("post", postSchema);

module.exports = {PostModel}