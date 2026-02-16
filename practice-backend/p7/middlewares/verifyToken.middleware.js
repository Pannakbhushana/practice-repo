const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {
    try {
        const authToken = req.headers.authorization;
        if(!authToken) throw new Error("Missing token !");
        
        const parts = authToken.split(" ");
        if(!parts || parts.length!== 2 || parts[0]!== "Bearer") throw new Error("Invalid token formate");

        const decoded = jwt.verify(parts[1], "bruce");
        if(decoded) next();
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
};

module.exports = {verifyToken};