const express = require("express");
const app = express();
const {connection} = require("./db");
const {authRoute} = require("./routes/auth.route");
const {postRoute} = require("./routes/post.route");
const {authorization} = require("./middleware/authorization.middleware");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/auth", authRoute);
app.use("/post", authorization, postRoute);




app.listen("8080", async ()=>{
    try {
        await connection;
        console.log("conected to db");
        console.log("server is running at port 8080");
    } catch (error) {
        console.log(error);
    }
})