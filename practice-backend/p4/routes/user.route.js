const express = require("express");
const userRoute = express.Router();
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");

userRoute.get("/", async (req, res) => {
    const token = req.headers.authorization;
    const authToken = token.split(" ");
    try {
        jwt.verify(authToken[1], "bruce", async(err, decoded) => {
            if (decoded) {
                const users = await UserModel.find(req.query);
                return res.status(200).send(users);
            }
            return  res.status(500).send({ "msg": `you are not authorized for this request, ${err.message}` });
        })
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

userRoute.post("/add", async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        newUser.save();
        res.status(200).send({ "msg": "new user added", newUser: newUser });
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

userRoute.patch("/update/:userId", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate({ _id: req.params.userId }, req.body);
        res.status(200).send({ "msg": "user updated successfully", user: user });
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

userRoute.delete("/delete/:userId", async (req, res) => {
    try {
        const user = await UserModel.findByIdAndDelete({ _id: req.params.userId });
        res.status(200).send({ "msg": "user deleted successfully", user: user });
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

module.exports = {
    userRoute
}