const fs = require("fs");

const logger = (req, res, next) => {
    fs.appendFileSync("./logger.md", `client visited ${req.url} by using method ${req.method}\n`);
    next()
}

module.exports = {
    logger
}