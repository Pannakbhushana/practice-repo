const jwt = require("jsonwebtoken");

const verifyToken = async(req, res, next) => {
    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({ msg: "Missing token...!" });
    }

    const parts = authToken.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ msg: "Invalid token format" });
    }

    const token = parts[1];
    try {
        const decoded = jwt.verify(token, "bruce");
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(401).send({ msg: "Invalid or expired token" });
    }
}

module.exports ={verifyToken}