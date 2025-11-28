const express = require("express");
const authRouter = express.Router();
const { AuthModel } = require("../model/auth.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

authRouter.get("/", async (req, res) => {
    try {
        const data = await AuthModel.find(req.query);
        res.status(200).send({ "data": data });
    } catch (error) {
        res.status(500).send({ "msg": error.message })
    }
})

authRouter.post("/regester", async (req, res) => {
    const { password } = req.body;
    try {
        bcrypt.hash(password, 3, async (err, hash) => {
            if (err) return res.status(500).send({ "msg": err.message })
            if (hash) {
                const data = new AuthModel({ ...req.body, password: hash });
                await data.save();
                res.status(200).send({ "msg": "user regestered successfully", data });
            }
        })
    } catch (error) {
        res.status(500).send({ "msg": error.message })
    }
})

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign({ name: "batman" }, "bruce")
    try {
        const user = await AuthModel.findOne({ email });
        if(!user){
            return res.status(404).send({ "msg": "user not found" })
        }
        if (user.email && user.password) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (err) return res.status(500).send({ "msg": err.message })
                if(!result) return res.status(401).send({ "msg": "Invalid Password" })
                if (result) return res.status(200).send({ "msg": "login successfull", data:{
                    "userId":user._id,
                    "userName":user.userName,
                    token
                } })
            })
        }
        else {
            return res.status(404).send({ "msg": "user not found" })
        }
    } catch (error) {
        res.status(500).send({ "msg": error.message })
    }
})

authRouter.delete('/delete/:id', async (req, res) => {
    try {
        const data = await AuthModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).send({ "msg": "user deleted successfully", data });
    } catch (error) {
        res.status(500).send({ "msg": error.message })
    }
})

module.exports = { authRouter }