const jwt = require("jsonwebtoken");

const authMiddleware = async(req, res, next) => {
    try{
        const authtoken = req.headers.authorization;
        if(!authtoken) throw new Error("Mission auth token !");
        const parts = authtoken.split(" ");
        if(!parts || parts.length!== 2 || parts[0]!== "Bearer") throw new Error("invalid token formate !");

        const token = parts[1];
        const result = jwt.verify(token, "bruce");
        if(result) next();
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

module.exports={authMiddleware};