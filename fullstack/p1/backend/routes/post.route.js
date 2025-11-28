const express = require("express");
const postRouter = express.Router();
const {PostModel} = require("../model/post.model");

postRouter.get("/", async(req, res)=>{
    try {
        const data = await PostModel.find(req.query);
        res.status(200).send(data);        
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

postRouter.post("/add", async(req, res)=>{
    try {
        const data = new PostModel(req.body);
        await data.save();
        res.status(200).send({"msg":"new post added successfully", post:data});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

postRouter.patch("/update/:id", async(req, res)=>{
    try {
        const post = await PostModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        res.status(200).send({"msg":"post updated successfully", post})
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

postRouter.delete("/delete/:id", async(req, res)=>{
    try {
        const data = await PostModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"msg":"post deleted successfully", post:data});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

module.exports = {
    postRouter
}