const express=require("express");
const teacherRoute=express.Router();

teacherRoute.get("/",(req,res)=>{
    console.log("Hello from Home Page")
    res.send("Teacher Home Page")
})

teacherRoute.get("/about",(req,res)=>{
    console.log("Hello from about  Page")
    res.send(" Teacher About Page")
})

module.exports={teacherRoute}