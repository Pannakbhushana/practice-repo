const fs = require("fs");

const logger = async(req, res, next) => {
    try {
        fs.appendFileSync("./logger.md", `user visited ${req.url} by ${req.method} at ${Date.now()}\n`)
        next()
    } catch (error) {
        res.status(500).send({"msg":error.message})
    }
}

module.exports = {logger}