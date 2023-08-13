const express=require("express");
const {connection}=require("./db.js");
const {userRoute}=require("./router/user.router.js");
const cors=require("cors")
require("dotenv").config()



const app=express();
app.use(express.json());
app.use("/user",userRoute);
app.use(cors())


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to data base");
    } catch (error) {
        console.log(error.message);
    }
    console.log(`app is running at port ${process.env.port}`);
})