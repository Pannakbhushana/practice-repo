const express = require("express");
const {connection} = require("./db")
const cors = require("cors");
const {authRoute} = require("./routes/auth.route");
const {userRoute} = require("./routes/user.route");
const {verifyToken} = require("./middlewares/verifyToken.middleware");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/user", verifyToken, userRoute);

app.listen("8080", async()=>{
    try {
        await connection;
        console.log("db is connected");
        console.log("server is running at port 8080");
    } catch (error) {
        console.log(error.message)
    }
})




