const fs = require("fs");

const logger = async(req, res, next) => {
    try {
       await fs.appendFileSync("./logger.md", `User visited ${req.url} by ${req.method} at ${Date.now()}\n`)
       next();
    } catch (error) {
        console.log(error);
        res.status(500).send({"msg":error.message});
    }
}

module.exports = {logger}