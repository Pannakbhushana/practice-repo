const express = require("express");
const {connection} = require("./db");
const {authRouter} = require("./routes/auth.route")
const {userRoute} = require("./routes/user.route")
const {authorization} = require("./middlewares/authorization.middleware");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);
app.use("/user", authorization, userRoute);

app.listen(8080, async()=>{
    try {
        await connection;
        console.log("connected to DB");
        console.log("server is running at 8080");
    } catch (error) {
        console.log(error)
    }
})