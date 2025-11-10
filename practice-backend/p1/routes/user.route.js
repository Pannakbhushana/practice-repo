const express = require("express");
const userRoute = express.Router();
const {UserModel} = require("../model/user.model");

userRoute.get("/", async(req, res)=>{
    const query = req.query
    try {
        const users = await UserModel.find(query);
        res.status(200).send(users);        
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

userRoute.post("/add", async(req,res)=>{
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(200).send(newUser); 
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})


userRoute.patch("/update/:userId", async(req,res)=>{
    try {
        const updatedUser = await UserModel.findByIdAndUpdate({_id:req.params.userId}, req.body);
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

userRoute.delete("/delete/:userId", async(req, res)=>{
    try {
        const deletedUser = await UserModel.findByIdAndDelete({_id:req.params.userId})
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

module.exports = {
    userRoute
}