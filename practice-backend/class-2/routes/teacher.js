const express = require('express');
const teacherRoutes = express.Router();

teacherRoutes.get('/', async(req, res)=>{
    res.send("teachers date");
});

teacherRoutes.post('/add', async(req, res)=>{
    res.send("new teacher added");
})

teacherRoutes.patch("/update", async(req, res)=>{
    res.send("teacher data updated");
})

teacherRoutes.delete("/delete", async(req,res)=>{
    res.send("teacher data deleted");
})

module.exports = {
    teacherRoutes
}