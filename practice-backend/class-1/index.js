const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json())

app.get("/", (req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.send({data:data});
})

app.get("/student", (req,res)=>{
    const data= JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    res.send({data:data.students});
})

app.post("/addstudent", (req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.students.push(req.body);
    console.log(data)
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("new student updated");
})


app.listen("8080", ()=>{
    console.log("server is running at port 8080");
})
