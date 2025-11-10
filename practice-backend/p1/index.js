const express = require("express");
const app = express();
const {connection} = require("./db");
const cors = require("cors");
const {logger} = require("./middlewares/logger");
const {userRoute} = require("./routes/user.route")

app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/user", userRoute);



app.listen("8080", async()=>{
    try {
        await connection
        console.log("connected to database");
        console.log("app is running at port 8080");
    } catch (error) {
        console.log("something went wrong !");
    }
})