const express = require("express");
const authRoute = express.Router();
const {AuthModel} = require("../model/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

authRoute.get("/", async(req, res)=>{
    try {
        const users = await AuthModel.find(req.query);
        res.status(200).send({"users":users});
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

authRoute.post("/regester", async(req,res)=>{
    const {password} = req.body;
    try {
        bcrypt.hash(password, 3, async(err, result)=>{
            if(err) throw new Error("something went wrong !");
            if(result){
                const user = new AuthModel({...req.body, password:result});
                await user.save();
                return res.status(200).send({"msg":"user regestered successfully", user})
            }
        })
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

authRoute.post("/login", async(req,res)=>{
    const {email, password} = req.body;
    try {
        const user = await AuthModel.findOne({email});
        if(!user) throw new Error("No user Found !");
        bcrypt.compare(password, user.password, async(err, result)=>{
            if(err) throw new Error("Invalid password !");
            if(result){
                return res.status(200).send({"msg":"Login successfull", "token":jwt.sign({name:"batman"}, "bruce")});
            }
        })
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

authRoute.delete("/delete/:id", async(req,res)=>{
    try {
        const user = await AuthModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"msg":"user deleted successfully",user})
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
})

module.exports={authRoute}