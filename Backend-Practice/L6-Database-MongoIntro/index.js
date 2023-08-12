const express=require("express");
const cors=require("cors");
const fs=require("fs");
const app=express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Home Page")
})

//query handling
app.get("/search",(req,res)=>{
    const {movie}=req.query;
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
   
    const response=data.movie.filter((el)=>{
        return el.name==movie;
    })
    if(response.length){
        res.send({msg:"Movie Data",Data:response[0]});
    }
    else{
        res.send({msg:"No search found !"});
    }
})

//param handling
app.get("/search/:id",(req,res)=>{
    const {id}=req.params;
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
   
    const response=data.movie.filter((el)=>{
        return el.id==id;
    })
    if(response.length){
        res.send({msg:"Movie Data",Data:response[0]});
    }
    else{
        res.send({msg:"No search found !"});
    }
})


app.listen("8080",()=>{
    console.log("server is running at port 8080")
})