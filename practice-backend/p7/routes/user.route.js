const express = require("express");
const userRoute = express.Router();
const {UserModel} = require("../model/user.model");

userRoute.get("/", async(req, res)=>{
    try {
        const data = await UserModel.find(req.query);
        res.status(200).send({"data":data});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
});

userRoute.post("/add", async(req, res)=>{
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).send({"data":newUser});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
});

userRoute.patch("/update/:id", async(req, res)=>{
    try {
        const {id} = req.params;
        const updatedData = await UserModel.findByIdAndUpdate({_id:id}, req.body);
        res.status(201).send({"data":updatedData});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
});

userRoute.delete("/delete/:id", async(req, res)=>{
    try {
        await UserModel.findByIdAndDelete({_id:req.params.id})
        res.status(204).send({"mag":"User deleted successfully"});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
});
module.exports = {userRoute};