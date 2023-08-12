const express=require("express");
const app=express();
const cors=require("cors");

const {timeLogs}=require("./middlewares/logger.middleware");
const {studentRoute}=require("./Routes/student.route");
const {teacherRoute}=require("./Routes/teacher.route");
    
app.use(express.json());
app.use(timeLogs);
app.use(cors())
app.use("/student",studentRoute)
app.use("/teacher",teacherRoute)



app.listen("8080",()=>{
    console.log("app is running at port 8080")
})