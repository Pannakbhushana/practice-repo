const fs = require("fs");

const logger = (req, res, next) => {
    fs.appendFileSync("./logger.md", `user visited ${req.url} route by ${req.method} method\n`)
    next();
}

module.exports = {
    logger
}