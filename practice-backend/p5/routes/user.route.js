const express = require("express");
const userRoute = express.Router();
const {UserModel} = require("../model/user.model");

userRoute.get("/", async (req, res)=>{
    try {
        const users = await UserModel.find(req.query);
        res.status(200).send({"msg":"success", users}); 
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

userRoute.post("/add", async(req, res)=>{
    try {
        const user = new UserModel(req.body);
        user.save();
        res.status(200).send({"msg":"new user added", user});
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

userRoute.patch("/update/:id", async(req,res)=>{
    try {
        await UserModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        const user =  await UserModel.findOne({_id:req.params.id}) 
        res.status(200).send({"msg":"user updated successfully", user})
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

userRoute.delete("/delete/:id", async (req, res)=>{
    try {
        await UserModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"msg":"user removed successfully"});
    } catch (error) {
       res.status(500).send({"msg":error.message}); 
    }
})

module.exports = {userRoute};