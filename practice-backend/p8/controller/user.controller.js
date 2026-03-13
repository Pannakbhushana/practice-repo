const {UserModel} = require("../model/user.model");

class UserController {
    async getUser(req, res){
        try {
            const users = await UserModel.find(req.query);
            res.status(200).send({"data":users});
        } catch (error) {
            res.status(500).send({"msg":error.message});
        }
    }

    async addUser(req, res){
        try {
            const newUser = new UserModel(req.body);
            await newUser.save();
            res.status(201).send({"msg":"New user added successfully","data":newUser});
        } catch (error) {
             res.status(500).send({"msg":error.message});
        }
    }

    async updateUser(req, res){
        const {id}=req.params;
        try {
            const updatedUser = await UserModel.findByIdAndUpdate({_id:id}, req.body);
            res.status(201).send({"msg":"user updated successfully", "data":updatedUser});
        } catch (error) {
            res.status(500).send({"msg":error.message}); 
        }
    }

    async deleteUser(req, res){
        const {id}= req.params;
        try {
            await UserModel.findByIdAndDelete({_id:id});
            res.status(200).send({"msg":"User deleted successfully !"});
        } catch (error) {
             res.status(500).send({"msg":error.message});
        }
    }
}

module.exports = new UserController();