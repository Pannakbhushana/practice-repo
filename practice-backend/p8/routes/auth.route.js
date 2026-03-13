const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/auth.controller");

authRouter.get("/", authController.getAllUsers);
authRouter.post("/signup", authController.signUp);
authRouter.post("/login", authController.login);

module.exports={authRouter};