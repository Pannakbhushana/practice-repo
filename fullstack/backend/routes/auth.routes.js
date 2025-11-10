const express = require("express");
const { authModel } = require("../model/auth.model");
const authRouter = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

authRouter.get("/", async (req, res) => {
    const filter = req.query;
    try {
        const user = await authModel.find(filter);
        res.status(200).send({ status: "success", data: user })
    } catch (error) {
        res.status(400).send({ status: "failed", msg: error });
    }
})

authRouter.post("/regester", async (req, res) => {
    const { password } = req.body;
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) res.status(400).send({ status: "failed", msg: err });
            const user = new authModel({ ...req.body, password: hash });
            await user.save();
            res.status(200).send({ status: "success", msg: "user added successfully", data: user })
        });
    } catch (error) {
        res.status(400).send({ status: "failed", msg: error });
    }
})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authModel.findOne({ email });
        if (user) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (err) res.status(400).send({ status: "failed", msg: err });
                if (result) res.status(200).send({ status: "success", data: user, token: jwt.sign({ name: 'batman' }, 'bruce') })
            });
        }
        else {
            res.status(400).send({ status: "failed", msg: "User not found !" });
        }
    } catch (error) {
        res.status(400).send({ status: "failed", msg: error });
    }
})

authRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params;
    let token = req.headers.authorization;
        token = token.split(" ")[1];
    try {
        jwt.verify(token, 'bruce', async (err, decoded) => {
            if(decoded){
                await authModel.findByIdAndUpdate({ _id: id }, req.body);
                res.status(200).send({ status: "success", msg: "user updated successfully" })
            }
            else{
                res.status(400).send({ status: "failed", msg: "Not authorised" });
            }
        });
    } catch (error) {
        res.status(400).send({ status: "failed", msg: error });
    }
})

authRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    let token = req.headers.authorization;
        token = token.split(" ")[1];

    try {
        jwt.verify(token, 'bruce', async (err, decoded) => {
            if(decoded){
                await authModel.findByIdAndDelete({ _id: id });
                res.status(200).send({ status: "success", msg: "user deleted successfully" })
            }
            else{
                res.status(400).send({ status: "failed", msg: "Not authorised" });
            }
        });
    } catch (error) {
        res.status(400).send({ status: "failed", msg: error });
    }
})

module.exports = {
    authRouter
}