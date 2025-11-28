const express = require("express");
const app = express();
const {connection} = require("./db")
const cors = require("cors");
const {postRouter} = require("./routes/post.route")
const {logger} = require("./middlewares/logger.middleware");
const {authRouter} = require("./routes/auth.route");
const {verifyToken} = require("./middlewares/verifytoken.middleware");

app.use(express.json());
app.use(cors())
app.use(logger);
app.use("/auth", authRouter)
app.use("/post", verifyToken, postRouter)

app.listen("8080", async()=>{
    try {
        await connection;
        console.log("connected to db")
        console.log("server is running at port 8080");
    } catch (error) {
        console.log(error)
    }
})