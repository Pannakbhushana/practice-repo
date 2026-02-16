const express = require("express");
const authRoute = express.Router();
const {AuthModel} = require("../model/auth.modle");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

authRoute.get("/", async(req, res)=>{
    try {
        const data = await AuthModel.find(req.query);
        res.status(200).send({"msg":data});
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
});

authRoute.post("/login", async(req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await AuthModel.findOne({email});
        if(!user) res.status(404).send({"msg":"No user found !"});
        bcrypt.compare(password, user.password, async(error, result)=>{
            if(error) throw new Error("Something went wrong");
            if(result) res.status(202).send({"msg":"Login success", token:jwt.sign({name:"batman"}, "bruce")})
        })
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
});

authRoute.post("/signup", async(req, res)=>{
    try {
        const {password} = req.body;
        bcrypt.hash(password, 3, async(error, result)=>{
            if(error) throw new Error("Something went wrong")
            if(result){
                const user = new AuthModel({...req.body, password:result});
                await user.save();
                res.status(200).send({...req.body, password:result});
            };
        })
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
});

authRoute.delete("/delete/:id", async(req, res)=>{
    try {
        await AuthModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"msg":"auth deleted successfully"})
    } catch (error) {
        res.status(500).send({msg:error.message});
    }
});

module.exports = {authRoute};