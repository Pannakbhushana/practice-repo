const express = require("express");
const authRoute = express.Router();
const {AuthModel} = require("../model/auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

authRoute.get("/", async(req, res)=>{
    try {
        const data = await AuthModel.find(req.query);
        res.status(200).send({"msg":"success", data}); 
    } catch (error) {
        res.status(500).send(error.message);
    }
});

authRoute.post("/regester", async(req, res)=>{
    const {email, password} = req.body;
    try {
        bcrypt.hash(password, 3, async(error, result)=>{
            if(error) throw new Error("something went wrong");
            if(result){
                const data = new AuthModel({email, password:result});
                await data.save();
                return res.status(201).send({"msg":"user regestered successfully", data});
            }
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
});

authRoute.post("/login", async(req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await AuthModel.findOne({email});
        if(!user) res.status(404).send({"msg":"user not found !"});
        bcrypt.compare(password, user.password, async(err, result)=>{
            if(err) throw new Error("something went wrong !");
            if(result){
                const token = jwt.sign({name:"batman"}, "bruce");
                return res.status(200).send({"msg":"login successful", token});
            }
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = {authRoute};