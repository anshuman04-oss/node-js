const http = require('node:http');

// HTTP module also extends to event module.
// The call back function is an event listener in reality.
// Basically, whenever a request reqches a server, the callback is executed.

// We must inform our server to listen any incoming request. For that, we can either use the listen method directly on the below method or can store it in a variable and apply the method on that.
const server = http.createServer((req, res) => {
    // After a request is received, we have to write code for a response.
    res.writeHead(200, {"content-type": "text/plain"})
    // http.writeHead() is used to send an HTTP header response to the client. Headetars provide metadata about the response.
    // response.writeHead(statusCode, headers); -> The syntax
    console.log(req)
    res.end("Anshuman")
    // res.end() is used to signal that the response is complete and send the final data to the client.
    // response.end([data], [encoding], [callback]); -> The syntax
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000")
})
// The nodejs port runs on port 3000.
// We added the callback function for when the server is listening.

// On running, the program doesn't exit and it waits for the request from the port 3000.
