const express = require("express");
const cors = require("cors");
const {connection} = require("./db");
const {userModel} = require("./db");
const {logger} = require("./middlewares/logger");
const app = express();


app.use(express.json());
app.use(cors())
app.use(logger)


app.get("/users", async(req, res)=>{
    const query = req.query;
    try {
        const users = await userModel.find(query);
        res.status(200).send({data:users});
    } catch (error) {
        res.status(500).send("something went wrong !");
    }
})

app.post("/adduser", async(req, res)=>{
    try {
         const payload = req.body;
        const user =new userModel(payload);
        await user.save();
        res.status(200).send({msg:"new user added"});
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"something went wrong !"})
    }
})


app.listen(8080, async ()=>{
    try {
        await connection;
        console.log("server is running at the port 8080");
        console.log("data base connected successfully");
    } catch (error) {
        console.log(error);
    }
})

app.patch("/update/:userId", async(req, res)=>{
    const {userId} = req.params;
    const payload = req.body;
    try {
        await userModel.findByIdAndUpdate({_id:userId}, payload);
        res.status(200).send({"msg":"user updated successfully"});
    } catch (error) {
        res.status(400).send({"msg":error});
    }
})

app.delete("/delete/:userId", async(req,res)=>{
    const {userId} = req.params;
    try {
        await userModel.findByIdAndDelete({_id:userId});
        res.status(200).send({"msg":"user deleted successfully"});
    } catch (error) {
        res.status(400).send({"msg":error})
    }
})