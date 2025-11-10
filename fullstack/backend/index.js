const express = require("express");
const cors = require('cors');
const { connection } = require("./db");
const {logger} = require("./middlewares/logger");
const {authRouter} = require("./routes/auth.routes");
const {userRouter} =require("./routes/user.routes");
const app = express();

app.use(express.json())
app.use(cors());
app.use(logger);
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(8080, async ()=>{
    try {
        await connection
        console.log("data base connected");
        console.log("server is running at 8080")
    } catch (error) {
        console.log(error)
    }
})