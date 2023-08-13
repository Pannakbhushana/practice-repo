const express=require("express");
const {connection}=require("./db.js");
const {UserModel}=require("./db.js");

const app=express();


app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.post("/add",async(req,res)=>{
    const payload=req.body;
    try {
        const newuser=new UserModel(payload);
        await newuser.save();
        res.status(200).send({msg:"new user has been added"});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})

app.get("/users",async(req,res)=>{
    const query=req.query;
    try {
        const data=await UserModel.find(query);
        res.status(200).send({data});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }     
})

app.delete("/delete/:userID", async(req,res)=>{
    const {userID}=req.params;
    try {
        await UserModel.findByIdAndDelete({_id:userID});
        res.status(200).send({msg:"user has been deleted"});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})


app.patch("/update/:userID",async(req,res)=>{
    const {userID}=req.params;
    const payload=req.body;
    try {
        res.status(200).send({msg:"user has been updated"});
        await UserModel.findByIdAndUpdate({_id:userID},payload)
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})




app.listen("3030",async()=>{
    try {
        await connection;
        console.log("connected to data base");
    } catch (error) {
        console.log(error.message);
    }
    console.log("app is running at port 3030");
})