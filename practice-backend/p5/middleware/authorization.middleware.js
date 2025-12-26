const jwt = require("jsonwebtoken");

const authorization = async (req, res, next) => {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) throw new Error("Missing auth token !");

        const parts = authToken.split(" ");
        
        if (parts.length !== 2 || parts[0] !== "Bearer") {
            throw new Error("Invalid token formate");
        }

        const token = parts[1];
        const decoded = jwt.verify(token, "bruce");
        if (decoded) next()
    } catch (error) {
        res.status(500).send({ "msg": error.message });
    }
}

module.exports = { authorization }