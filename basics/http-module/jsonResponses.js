const http = require("node:http")

const server = http.createServer((req, res) => {
    const superHero = {
        "first name": "Bruce",
        "last name": "Wayne"
    }

    res.writeHead(200, {'content-type': 'application/json'})
    res.end(JSON.stringify(superHero))
})

server.listen(3000, () => {
    console.log("port - 3000");
})