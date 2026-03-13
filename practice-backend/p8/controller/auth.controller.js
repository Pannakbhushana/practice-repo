const {AuthModel} = require("../model/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController{
      async getAllUsers(req, res){
        try {
            const data = await AuthModel.find(req.query);
            res.status(200).send({data});
        } catch (error) {
            res.status(500).send({"msg":error.message}); 
        }
      }

      async login(req, res){
       const {email, password}= req.body;
       const token = jwt.sign({name:"batman"}, "bruce");
        try {
            const user = await AuthModel.findOne({email});
            if(!user) throw new Error("User Not regestered !");
            bcrypt.compare(password, user.password, async(err, result)=>{
                if(err) throw new Error("Something went wrong !");
                if(result){
                    return res.status(200).send({"msg":"Login successfull !", data:{email, token}})
                }
            })
            
        } catch (error) {
             res.status(500).send({"msg":error.message});
        }
      }

      async signUp(req, res){
        const { password}= req.body;
        try {
            bcrypt.hash(password, 3, async(err, result)=>{
                if(err) throw new Error("Something went wrong !");
                if(result){
                    const newUser = new AuthModel({...req.body, password:result});
                    await newUser.save();
                   return res.status(201).send({"msg":"User regestered successfully !"})
                }
            })
        } catch (error) {
             res.status(500).send({"msg":error.message});
        }
      }
}

module.exports= new AuthController();