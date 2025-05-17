const http = require("node:http")
// Now, as we have to read data from another file, we need to use the fs module
const fs = require('node:fs')

const server = http.createServer((req, res) => {
    // const superHero = "<h1>Superman</h1>"
    res.writeHead(200, {"content-type":"text/html"})
    // const html = await fs.readFile("./index.html", "utf8"); 
    fs.createReadStream("./index.html").pipe(res)
    // res.end(html)
})

server.listen(3000, () => {
    console.log("port-3000");
})