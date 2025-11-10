const express = require("express");
const authRoute = express.Router();
const { AuthModel } = require("../model/auth.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

authRoute.get("/", async (req, res) => {
    try {
        const users = await AuthModel.find(req.query);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ "msg": error.message })
    }
})

authRoute.post("/regester", async (req, res) => {
    const { password } = req.body;
    try {
        bcrypt.hash(password, 3, (err, hash) => {
            if (err) {
                return res.status(500).send({ "msg": err.message })
            }
            if (hash) {
                const user = new AuthModel({ ...req.body, password: hash })
                user.save()
                return res.status(200).send({ "msg": "new user sign up !", user: user })
            }
        })

    } catch (error) {
        res.status(500).send({ "msg": error.message })
    }
})

authRoute.post("/login", async (req, res) => {
    try {
        const user = await AuthModel.findOne({email:req.body.email});
        if(user.email){
            bcrypt.compare(req.body.password, user.password, (error, result)=>{
                if(result){
                   return res.status(200).send({"msg":"login successful", "token":jwt.sign({name:"batman"},"bruce")})
                }
                return res.status(500).send({"msg":"user not found !"});
            })
        }
    } catch (error) {
        res.status(500).send({ "msg": error.message })
    }
})

module.exports = {
    authRoute
}