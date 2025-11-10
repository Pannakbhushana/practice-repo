const express = require('express');

const studentRoute = express.Router();

studentRoute.get('/', async (req, res)=>{
    res.send("Student data");
})

studentRoute.post('/add', async (req, res)=>{
    res.send("mew student added");
})

studentRoute.patch("/update", async(req,res)=>{
    res.send("student updated successfully");
})

studentRoute.delete("/delete", async(req,res)=>{
    res.send("student removed successfully");
})

module.exports = {
    studentRoute
}