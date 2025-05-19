const fs = require("fs");

function logReqRes(fileName) {
  return ((req, res, next) => {
    fs.appendFile(
      fileName, 
      `\n${Date.now()}: ${req.method}, ${req.path}`,
      (err, data) => {
        if(err) console.log("Error writing to the log file: ", err);
        next();
      }
    );
  });
}

module.exports = {
  logReqRes,
};