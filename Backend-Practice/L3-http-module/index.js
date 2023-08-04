const http=require("http");
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.setHeader("Content-type","text/html")
        res.end("<h1>Home Page</h1>");
    }


    else if(req.url=='/reports'){
        res.end("Report Page");
    }



    else if(req.url=='/data'){
       res.write('Following is the data, You requested\n');
       
       try {
            const data=fs.readFileSync("./data.json",'utf-8');
            res.end(data);
       } catch (error) {
            console.log(error)
       }
       res.setHeader("Content-type","application/json")
       res.end()
    }


    else if(req.url=='/bloga'){
        res.end("Blog page")
    }



    else if(req.url=='/add'){
        let user={
            id:Date.now(),
            name:"chunnu",
            age:21
        }
        const data=JSON.parse(fs.readFileSync("./data.json",'utf-8'));

        data.push(user);

        fs.writeFileSync("./data.json",JSON.stringify(data));
        
        res.end("Data is updated to the database")
    }



    else{
        res.end("404 Not Found !!!")
    }
    
})


server.listen(4500,()=>{
    console.log("server is running at port 4500");
})

// in order to make changes without restarting the server again and again follow the below steps
// 1. npm i nodemon
// 2. go to package.json and under script section write-> server:"nodemon index.js"