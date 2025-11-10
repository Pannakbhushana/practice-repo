const express = require("express");
const userRoute = express.Router();
const {UserModel} = require("../model/user.model");

userRoute.get("/", async(req, res)=>{
    try {
        const data = await UserModel.find(req.query);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})


userRoute.post("/add", async(req, res)=>{
    try {
        const data = new UserModel(req.body);
        await data.save();
        res.status(200).send({"msg":"new user added", "data":data});
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

userRoute.patch("/update/:userId", async(req, res)=>{
    try {
        const user = await UserModel.findByIdAndUpdate({_id:req.params.userId}, req.body);
        res.status(200).send({"msg":"user updated", "data":user});
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

userRoute.delete("/delete/:userId", async(req, res)=>{
    try {
        const user = await UserModel.findByIdAndDelete({_id:req.params.userId});
        res.status(200).send({"msg":"user deleted", "data":user});
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
})

module.exports = {
    userRoute
}