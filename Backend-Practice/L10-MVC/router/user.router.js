const express=require("express");
const {UserModel}=require("../model/user.model");
const userRoute=express.Router();



userRoute.post("/add",async(req,res)=>{
    const payload=req.body;
    try {
        const newuser=new UserModel(payload);
        await newuser.save();
        res.status(200).send({msg:"new user has been added"});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})

userRoute.get("/",async(req,res)=>{
    const query=req.query;
    try {
        const data=await UserModel.find(query);
        res.status(200).send({data});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }     
})

userRoute.delete("/delete/:userID", async(req,res)=>{
    const {userID}=req.params;
    try {
        await UserModel.findByIdAndDelete({_id:userID});
        res.status(200).send({msg:"user has been deleted"});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})


userRoute.patch("/update/:userID",async(req,res)=>{
    const {userID}=req.params;
    const payload=req.body;
    try {
        res.status(200).send({msg:"user has been updated"});
        await UserModel.findByIdAndUpdate({_id:userID},payload)
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})



module.exports={userRoute}