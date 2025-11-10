const express = require("express");
const {UserModel} = require("../model/user.model");
const userRoute = express.Router();

userRoute.get("/", async(req, res)=>{
    try {
    const data = await UserModel.find(req.query);
    res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

userRoute.post("/add", async(req, res)=>{
    try {
        const data = new UserModel(req.body);
        await data.save();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

userRoute.patch('/update/:userId', async(req,res)=>{
    try {
        const data = await UserModel.findByIdAndUpdate({_id:req.params.userId}, req.body);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

userRoute.delete('/delete/:userId', async(req,res)=>{
    try {
        const data = await UserModel.findByIdAndDelete({_id:req.params.userId});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = {
    userRoute
};