const express = require("express");
const authRoute = express.Router();
const {AuthModel} = require("../model/auth.modle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

authRoute.get("/", async(req, res)=>{
    try{
        const users = await AuthModel.find();
        res.status(200).send({users});
    }
    catch(error){
        res.status(500).send({msg:error.message});
    }
});

authRoute.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await AuthModel.findOne({email});
        if(!user) return res.status(400).send({msg:"User not found ! please sign up first"});
        bcrypt.compare(password, user.password, async(err, result)=>{
            if(err) throw new Error(err.message);
            const token = jwt.sign({name:"batmen"}, "bruce");
            res.status(200).send({email:user.email, token});
        })
    }
    catch(error){
        res.status(500).send({msg:error.message});
    }
});

authRoute.post("/signup", async(req, res)=>{
    const {password} = req.body;
    try{
       bcrypt.hash(password, 3, async(err, hash)=>{
        if(err) throw new Error(err.message);
        const user = new AuthModel({...req.body, password:hash});
        await user.save();
        res.status(200).send({msg:"signed up successfully !"});
       })
    }
    catch(error){
        res.status(500).send({msg:error.message});
    }
});

authRoute.delete("/delete/:id", async(req, res)=>{
    try{
        await AuthModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({msg:"user deleted successfully !"});
    }
    catch(error){
        res.status(500).send({msg:error.message});
    }
});

module.exports = {authRoute};