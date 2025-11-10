const express = require("express");
const app = express();
const cors = require("cors");
const {logger} = require("./middleware/logger");
const {connection} = require("./db");
const {userRoute} = require("./routes/user.route");
const {authRoute} = require("./routes/auth.route");

app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/user", userRoute);
app.use("/auth", authRoute);

app.listen("8080", async()=>{
    try {
        await connection;
        console.log("connect to database");
        console.log("server is running at port 8080");
    } catch (error) {
        console.log(error.message);
    }
})