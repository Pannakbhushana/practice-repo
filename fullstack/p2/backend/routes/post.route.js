const express = require("express");
const postRoute = express.Router();
const {PostModel} = require("../model/post.model");

postRoute.get("/", async(req, res)=>{
    try {
        const posts = await PostModel.find(req.query);
        res.status(200).send({posts});
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

postRoute.post("/add", async(req, res)=>{
    try {
        const newPost = new PostModel(req.body);
        await newPost.save();
        res.status(200).send({"msg":"new post added successfully", post:newPost});
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

postRoute.patch("/update/:id", async(req, res)=>{
    try {
        const post = await PostModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        res.status(200).send({"msg":"post updated successfully", post});
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

postRoute.delete("/delete/:id", async(req,res)=>{
    try {
        const post = await PostModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"msg":"post deleted successfully", post})
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})


module.exports = {postRoute};