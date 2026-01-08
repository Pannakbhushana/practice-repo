const jwt = require("jsonwebtoken");

const authorization = (req, res, next) =>{
    try {
        const authToken = req.headers.authorization;
        if(!authToken) throw new Error("missing token");
        const part = authToken.split(" ");

        if(!part.length === 2 || part[0]!== "Bearer"){
            throw new Error("invalid token formate !");
        };

        const token = part[1];
        const decoded = jwt.verify(token, "bruce");
        if(decoded) next();
    } catch (error) {
        res.status(500).send({"msg":error.message});
    }
}

module.exports = {authorization}