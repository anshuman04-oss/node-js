const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()}: New request received, ${req.url}\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) console.error("Log write failed:", err);
      switch (req.url) {
      case "/":
        res.end("Home page");
        break;
      case "/about":
        res.end("About page");
        break;
      default:
        res.end("404 Not found");
    }
  });
});

server.listen(3000, () => {
  console.log("Running on port 3000")
})