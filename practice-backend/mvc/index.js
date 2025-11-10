const express = require("express");
const app = express();
const cors = require("cors");
const {userRoute} = require("./routes/user.route");
const { connection } = require("./db");
const {logger} = require("./middlewares/logger");

app.use(express.json())
app.use(cors());
app.use(logger)
app.use("/users", userRoute);

app.listen(8080, async()=>{
    try {
        await connection
        console.log("server is running at port 8080");
        console.log("connected to database");
    } catch (error) {
        console.log({"msg":error.message});
    }
})

