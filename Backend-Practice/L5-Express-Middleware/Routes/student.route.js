const express=require("express");
const studentRoute=express.Router();

studentRoute.get("/",(req,res)=>{
    console.log("Hello from Home Page")
    res.send("Student Home Page")
})

studentRoute.get("/about",(req,res)=>{
    console.log("Hello from about  Page")
    res.send("student About Page")
})

module.exports={studentRoute}