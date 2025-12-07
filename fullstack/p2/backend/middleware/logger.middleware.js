const fs = require("fs");

const logger = (req, res, next) => {
    fs.appendFileSync("./logger.md", `user visited ${req.url} using ${req.method} at ${Date.now()}\n`);
    next();
}

module.exports = {logger}