const express = require("express");
const userRoute = express.Router();
const userController = require("../controller/user.controller");

userRoute.get("/", userController.getUser);
userRoute.post("/add", userController.addUser);
userRoute.patch("/update/:id", userController.updateUser);
userRoute.delete("/delete/:id", userController.deleteUser);

module.exports = {userRoute};