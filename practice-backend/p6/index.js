const express = require("express");
const app = express();
const cors = require("cors");
const {connection} = require("./db")
const {authRoute} = require("./routes/auth.route");
const {userRouter} = require("./routes/user.route");
const {authorization} = require("./middleware/authorization.middleware");

app.use(express.json());
app.use(cors());
app.use("/auth", authRoute);
app.use("/user", authorization, userRouter);

app.listen("8080", async()=>{
    try {
        await connection;
        console.log("connected to DB")
        console.log("server is started ar 8080")
    } catch (error) {
        console.log(error.message);
    }
})
