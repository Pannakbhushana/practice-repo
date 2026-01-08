const express = require("express");
const userRouter = express.Router();
const {UserModel} = require("../model/user.model");

userRouter.get("/", async(req, res)=>{
    try {
        const data = await UserModel.find(req.query);
        res.status(200).send({"msg":"success", data});
    } catch (error) {
        res.status(500).send(error.message);
    }
})

userRouter.post("/add", async(req, res)=>{
    try {
        const data = new UserModel(req.body);
        await data.save();
        res.status(201).send({"msg":"user added successfully",data});
    } catch (error) {
       res.status(500).send(error.message);
    }
});

userRouter.patch("/update/:id", async(req, res)=>{
    try {
        await UserModel.findByIdAndUpdate({_id:req.params.id}, req.body);
        res.status(200).send({"msg":"user updated successfully"});
    } catch (error) {
        res.status(500).send(error.message);
    }
});

userRouter.delete("/delete/:id", async(req, res)=>{
    try {
        await UserModel.findByIdAndDelete({_id:req.params.id});
        res.status(204).send({"msg":"user deleted successfully"});
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = {userRouter};