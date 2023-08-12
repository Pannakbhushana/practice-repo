const fs=require("fs");

const timeLogs=(req,res,next)=>{
    fs.appendFileSync("./logs.txt",`client visited ${req.url} at ${Date()}\n`)
    next()
}

module.exports={timeLogs}