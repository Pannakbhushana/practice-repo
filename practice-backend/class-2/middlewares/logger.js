const fs = require('fs');

const logger = (req, res, next) =>{
    fs.appendFileSync("./logger.txt", `Client Visited ${req.url} using the method ${req.method} at ${Date}\n`);
    next();
}

module.exports = {
    logger
}