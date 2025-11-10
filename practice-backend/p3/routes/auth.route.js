const express = require("express");
const authRoute = express.Router();
const { AuthModel } = require("../model/auth.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

authRoute.get("/", async (req, res) => {
    const userToken = req.headers.authorization;
    const token = userToken.split(" ");
    jwt.verify(token[1], 'bruce',  async(err, decoded) => {
        try {
            if (decoded) {
                const user = await AuthModel.find()
                return res.status(200).send({ "users": user });
            }
            else{
               return res.status(500).send({"msg":"You are not authorized for this request !"})
            }
        } catch (error) {
               return res.status(500).send({ "msg": error.message });
        }
    });
})

authRoute.post("/regester", async (req, res) => {
    const { password } = req.body;
    const token = jwt.sign({ name: "batmen" }, 'bruce');
    try {
        bcrypt.hash(password, 3, async (err, hash) => {
            if (err) res.status(500).send({ "msg": err.message });
            const user = new AuthModel({ ...req.body, password: hash });
            user.save();
            res.status(200).send({ "msg": "user added successfully !", token });
        });
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

authRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const token = jwt.sign({ name: "batmen" }, 'bruce');
    try {
        const user = await AuthModel.findOne({ email });
        if (user.email) {
            bcrypt.compare(password, user.password, async (err, result) => {
                if (err) {
                    return res.status(500).send({ "msg": err.message });
                }
                if (result) {
                    return res.status(200).send({ "msg": "Login successfull !", token })
                }
                return res.status(500).send({ "msg": "Wronge credential" })
            });
        }
        else {
            return res.status(500).send({ "msg": "User Not Found" });
        }
    } catch (error) {
        return res.status(500).send({ "msg": error.message });
    }
})

authRoute.delete("/delete/:userId", async (req, res) => {
    try {
        const user = await AuthModel.findByIdAndDelete({ _id: req.params.userId });
        res.status(200).send({ "msg": "user deleted", "data": user });
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

module.exports = {
    authRoute
}