const jwt = require("jsonwebtoken");

const authorization = async (req, res, next) => {
    try {
        const tokenData = req.headers.authorization;
        if (!tokenData) {
            return res.status(401).send({ msg: "Missing Token" });
        }

        const parts = tokenData.split(" ");

        if (parts.length !== 2 || parts[0] !== "Bearer") {
            return res.status(401).send({ msg: "Invalid token format" });
        }
        
        const token = parts[1];
        const decoded = jwt.verify(token, "bruce");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {authorization}