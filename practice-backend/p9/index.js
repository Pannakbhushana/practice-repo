const express = require("express");
const {connection} = require("./db");
const {userRoute} = require("./routes/user.route");
const {authRoute} = require("./routes/auth.route");
const {authMiddleware} = require("./middlewares/auth.middleware");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", authMiddleware, userRoute);
app.use("/auth", authRoute);

app.listen("8080", async()=>{
    try{
        await connection
        console.log("db connected");
        console.log("server is runnig at port 8080")
    }
    catch(err){
        console.log(err.message);
    }
})
