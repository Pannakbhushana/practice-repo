const fs = require("fs");

const logger =  (req, res, next) => {
    fs.appendFileSync("./logger.md", `user visited the route ${req.url} using method ${req.method}\n`);
    next();
}

module.exports = {
    logger
}