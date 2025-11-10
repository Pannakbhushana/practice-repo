const express = require("express");
const authRoute = express.Router();
const { AuthModel } = require("../model/auth.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

authRoute.get("/", async (req, res) => {
    // const tokenData = req.headers.authorization;
    // const token = tokenData.split(" ");
    try {
        const data = await AuthModel.find(req.query);
        res.status(200).send(data);
        // jwt.verify(token[1], "bruce", async (err, decode) => {
        //     if (err) return res.status(500).send({ "msg": err.message });
        //     if (decode) {
        //         const data = await AuthModel.find(req.query);
        //         res.status(200).send(data);
        //         return
        //     }
        //     else{
        //        return res.status(404).send({"msg":"You are not authorized for this request"});
        //     }
        // })
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

authRoute.post("/regester", async (req, res) => {
    const { password } = req.body;
    try {
        bcrypt.hash(password, 3, async (err, hash) => {
            if (err) return res.status(500).send({ "msg": err.message });
            const data = new AuthModel({ ...req.body, password: hash });
            await data.save();
            res.status(200).send(data);
            return
        })
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

authRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await AuthModel.findOne({ email });
        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) return res.status(500).send({ "msg": err.message });
                if (result) {
                    res.status(200).send({
                        "Token": jwt.sign({ name: "batman" }, "bruce"),
                        "userId": user._id,
                        "email":user.email
                    })
                    return
                }

            })
        }

    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
})

authRoute.delete("/delete/:id", async(req,res)=>{
        try {
           const data = await AuthModel.findByIdAndDelete({_id:req.params.id});
            res.status(200).send({"msg":"User Deleted Successfully", "user":data});
        } catch (error) {
            res.status(500).send({ "msg": error.message });
        }
})

module.exports = { authRoute }