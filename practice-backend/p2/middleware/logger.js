const fs = require("fs");

const logger = (req, res, next) =>{
    fs.appendFileSync("./logger.md", `user has visited ${req.url} by ${req.method} at ${Date.now}\n`);
    next();
}

module.exports = {
    logger
}