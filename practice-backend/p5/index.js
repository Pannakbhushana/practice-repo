const express = require("express");
const app = express();
const cors = require("cors");
const {connection} = require("./db");
const {userRoute} = require("./routes/user.route");
const {authRoute} = require("./routes/auth.route")
const {authorization} = require("./middleware/authorization.middleware");

app.use(express.json());
app.use(cors());
app.use("/auth", authRoute)
app.use("/user", authorization, userRoute);

app.listen("8080", async ()=>{
    try {
        await connection;
        console.log("conected to db");
        console.log("server is running at port 8080");
    } catch (error) {
        console.log(error.message);
    }
})