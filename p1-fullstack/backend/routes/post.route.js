const express = require("express");
const postRoute = express.Router();
const {PostModel} = require("../model/post.model");
const {AuthModel} = require("../model/auth.model");

postRoute.post("/add", async(req, res)=>{
    const {userId} = req.body;
    try {
        const user = await AuthModel.findOne({_id:userId});
        if(user){
            const newPost = new PostModel(req.body);
            await newPost.save()
            return res.status(200).send({"msg":"New post added", "post":newPost});
        }
        return res.status(404).send({"msg":"User not found !"})
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

postRoute.get("/", async(req, res)=>{
    try {
        const posts = await PostModel.find(req.query).populate("userId", "-password");
        res.status(200).json(posts);
    } catch (error) {
      res.status(500).send({"msg":error.message})
    }
})

postRoute.patch("/update/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const data = await PostModel.findByIdAndUpdate({_id:id}, req.body);
        return res.status(200).send({"msg":"Post Updated successfully", "post":data});
    } catch (error) {
      res.status(500).send({"msg":error.message})
    }
})

postRoute.delete("/delete/:id", async(req, res)=>{
    try {
        const data = await PostModel.findByIdAndDelete({_id:req.params.id});
        return res.status(200).send({"msg":"Post Deleted successfully", "post":data});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})



module.exports = {postRoute};