const express = require("express");
const app = express()
const cors = require("cors");
const {logger} = require("./middlewares/logger");
const { connection } = require("./db");
const {authentication} = require("./routes/authentication.route");


app.use(express.json());
app.use(cors());
app.use(logger);
app.use("/auth", authentication)


app.listen(8080, async()=>{
    try {
        await connection
        console.log("server is running at 8080");
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
})