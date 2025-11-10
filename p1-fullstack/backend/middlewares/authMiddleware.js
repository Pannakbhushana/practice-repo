const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(500).send({ "msg": "Auth token missing !" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).send({ msg: "Token missing" });
    }

    try {
        const decoded = jwt.verify(token, "bruce");
        if(decoded){
            next();
        }
    } catch (error) {
        return res.status(500).send({ "Error": error });
    }
}

module.exports = { authMiddleware }