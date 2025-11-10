const express = require("express");
const userRoute = express.Router();
const {userModel} = require("../model/user.model"); 

userRoute.get("/", async(req, res)=>{
    const query = req.query;
    try {
        const users = await userModel.find(query);
        res.status(200).send({"data":users});
    } catch (error) {
        res.status(400).send({"error":error.message});
    }
})

userRoute.post("/add", async(req, res)=>{
    try {
        const newUser = new userModel(req.body);
        await newUser.save();
        res.status(200).send({"msg":"new user has bee added"});
    } catch (error) {
        res.status(400).send({"error":error});
    }
})

userRoute.patch("/update/:userId", async(req, res)=>{
    const {userId} = req.params;
    try {
        const updatedUser = await userModel.findByIdAndUpdate({_id:userId}, req.body);
        res.status(200).send({"msg":"user updated successfully", "data":updatedUser});
    } catch (error) {
        res.status(400).send({"msg":error});
    }
})

userRoute.delete("/delete/:userId", async(req, res)=>{
    const {userId} = req.params;
    try {
        const deletedUser = await userModel.findByIdAndDelete({_id:userId});
        res.status(200).send({"msg":"user has been deleted successfully", "user":deletedUser});
    } catch (error) {
        res.status(400).send({"msg":error});
    }
})

module.exports = {
    userRoute
}