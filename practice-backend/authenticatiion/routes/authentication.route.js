const express = require("express");
const authentication = express.Router();
const { userModel } = require("../model/authentication.model");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

authentication.get("/users", async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).send({ "users": users });
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

authentication.post("/regester", async (req, res) => {
    const { password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) res.status(400).send({ "err": err })

            const user = new userModel({ ...req.body, password: hash });
            await user.save();
            res.status(200).send({ "msg": "user regestered successfully" });
        });
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

authentication.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if(result){
                    res.status(200).send({ "msg": "Login successfull", token: jwt.sign({ name: 'batmen' }, 'bruce') });
                }
                else{
                     res.status(400).send({ "msg": "wrong credential" });
                }
            });
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

authentication.get("/details", async (req, res) => {
    let token = req.headers.authorization;
    token = token.split(" ");

    jwt.verify(token[1], 'bruce', async (err, decoded) => {
        try {
            if (decoded) {
                res.status(200).send({ "msg": "Welcome to users details page" });
            }
            else {
                res.status(400).send({ "msg": "You are not authorized for this page, login first !!!" });
            }
        } catch (error) {
            res.status(400).send({ "err": error });
        }
    });
})

module.exports = {
    authentication
}