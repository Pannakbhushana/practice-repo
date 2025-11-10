const express = require("express");
const app = express();
const cors = require("cors");
const {connection} = require("./db");
const {logger} = require("./middlewares/logger");
const {authRoute} = require("./routes/auth.route")
const {postRoute} = require("./routes/post.route");
const {authMiddleware} = require("./middlewares/authMiddleware");

app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/auth", authRoute);
app.use("/post", authMiddleware, postRoute);

app.listen("8080", async()=>{
    try {
        await connection;
        console.log("connected to db");
        console.log("server is running ar 8080");
    } catch (error) {
        console.log(error)
    }
})