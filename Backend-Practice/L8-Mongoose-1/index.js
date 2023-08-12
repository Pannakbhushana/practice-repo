const mongoose=require("mongoose");

const main=async ()=>{
    try {
        const  connection= await mongoose.connect("mongodb://127.0.0.1:27017/web24nxm")
        console.log("connected to mangodb")
        await UserModel.insertMany([{name:"Rahul Mishra",age:29,city:"Gumla"},{name:"Suraj Mishra",age:27,city:"Ranchi"}]);
        const data= await UserModel.find()
        console.log(data);
    } catch (error) {
        console.log(error.message)
    }
}

main()

const userSchema=mongoose.Schema({
    name:{type:String, require:true},
    age:String,
    city:String
})

const UserModel=mongoose.model("user",userSchema);