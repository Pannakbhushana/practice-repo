const express=require("express");
const fs=require("fs");

const app=express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Home Page")
})

app.get("/students", (req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.send(data.students)
})

app.post("/addteacher", (req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.teachers.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Teacher has been added")
})


app.patch("/updatestudent",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));

    for(let i=0; i<data.students.length; i++){
        if(data.students[i].name=='Ankit Mishra'){
            data.students[i].age=req.body.age;
            break;
        }
    }
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Student has been updated")

})


app.delete("/deletestudent",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"));

    let new_student_data=data.students.filter((el)=>{
        return el.name!="Ankit Mishra";
    })

    data.students=new_student_data;
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Student has been deleted")
})



app.listen(8080, ()=>{
    console.log("App is runnin at port 8080")
})