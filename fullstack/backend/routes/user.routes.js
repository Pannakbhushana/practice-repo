const express = require("express");
const { userModel } = require("../model/userr.model");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    const filter = req.query;
    try {
        const data = await userModel.find(filter);
        res.status(200).send({ data });
    } catch (error) {
        res.status(400).send({ msg: error });
    }
})

userRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const data = await userModel.find({ _id: id });

        if (!data) {
            return res.status(404).send({status:"failed", msg: "User not found" });
        }

        res.status(200).send({status:"success", data });
    } catch (error) {
        res.status(400).send({status:"error", msg: error });
    }
})

userRouter.post("/add", async(req, res)=>{
    try {
        const user = new userModel(req.body);
        await user.save()
        res.status(200).send({status:"success", msg:"User added successfully", data:[req.body] });
    } catch (error) {
        res.status(400).send({status:"error", msg: error });
    }
}),

userRouter.patch("/update/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const updatedUser = await userModel.findByIdAndUpdate({_id:id}, req.body);
        res.status(200).send({status:"success", msg:"User updated successfully", data:updatedUser });
    } catch (error) {
        res.status(400).send({status:"error", msg: error });
    }
});

userRouter.delete("/delete/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const deletedData = await userModel.findByIdAndDelete({_id:id});
        res.status(200).send({status:"success", msg:"User updated successfully", data:deletedData });
    } catch (error) {
        res.status(400).send({status:"error", msg: error });
    }
})


module.exports = {
    userRouter
}