const fs=require("fs");

//--------------------------------------Read---------------------------------------------------------------------------------------


//--------------------------Scyncronous---------------------
// let data;
// try {
//     data=fs.readFileSync("./lecture.txt","utf-8");
// } catch (error) {
//    console.log(error)
// }
// console.log(data);


//--------------  Acyncronous-----------------------------------
// fs.readFile("./lecture.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })

// console.log("hello world")







//-----------------------------------------------------------Write---------------------------------------------------------------------

// ---------------------------------------write file Acyncronously-------------------

// fs.writeFile("./lecture.txt","Hello Guys, I am Chunnu \n",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data has ben writen")
//     }
// })


// ---------------------------------------write file Scyncronously-------------------

// try {
//     fs.writeFileSync("./lecture.txt","Hello Guys, I am Chunnu \n");
//     console.log("data has ben writen")
// } catch (error) {
//     console.log(error)
// }








//----------------------------------------------------------------------------------Append---------------------------------------------------


// ---------------------------------------Append file Acyncronously-------------------

// fs.appendFile("./lecture.txt","learning node js \n",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("data has ben appended")
//     }
// })


// ---------------------------------------Append file Scyncronously-------------------

try {
    fs.appendFileSync("./lecture.txt","Hello Guys, I am Chunnu \n");
    console.log("data has ben appended")
} catch (error) {
    console.log(error)
}