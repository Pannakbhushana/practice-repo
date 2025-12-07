const jwt = require("jsonwebtoken");

const authorization = async(req, res, next) => {
    try {
        const authToken = req.headers.authorization;
        if(!authToken) throw new Error("Authorization header missing !");

        const parts = authToken.split(" ");

        if(parts.length!== 2 || parts[0]!=="Bearer") throw new Error("invalid token syntex, Bearer is missing !");

        const token = parts[1];
        const decode = jwt.verify(token, "bruce");
        if(decode) next()
    } catch (error) {
       return res.status(500).send({"msg":error.message})
    }
}

module.exports = {authorization};