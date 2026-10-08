const express = require("express");
const {UserModel} = require("../model/user.model");
const userRoute = express.Router();

userRoute.get("/", async(req, res)=>{
    try{
        const users = await UserModel.find(req.query);
        res.status(200).send({users});
    }
    catch(error){
        res.status(500).send({error:error.message});
    }
});

userRoute.post("/add", async(req, res)=>{
    try{
        const newUser = new UserModel(req.body);
         await newUser.save();
         res.status(200).send({msg:"New user added"});
    }
    catch(error){
        res.status(500).send({error:error.message});
    }
});

userRoute.patch("/update/:id", async(req, res)=>{
    const {id} = req.params;
    try{
         await UserModel.findByIdAndUpdate({_id:id}, req.body);
        const user = await UserModel.findOne({_id:id}); 
        res.status(200).send({msg:"user updated successfully", user});
    }
    catch(error){
        res.status(500).send({error:error.message});
    }
});

userRoute.delete("/delete/:id", async(req, res)=>{
    const {id} = req.params;
    try{
        await UserModel.findByIdAndDelete({_id:id});
        res.status(200).send({msg:"user deleted successfully !"});
    }
    catch(error){
        res.status(500).send({error:error.message});
    }
});





module.exports={userRoute};