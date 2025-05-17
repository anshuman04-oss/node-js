const fs = require('node:fs');
const gzip = require('node:zlib');  // A library used to make zip files and chaining streams.

// To read data, we use readable stream made available using the createReadStream method on the fs module.
const readableStream = fs.createReadStream("./file1.txt", {
    encoding: "utf-8",
    highWaterMark: 30
})  // Readable stream to read data from file1.txt.
// Receives file path as the first arguments and an options object as the second argument.

const writableStream = fs.createWriteStream("./file2.txt")

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

// The listener to the readableStream takes two parameters. One is the data and the other is a callback function for writing the chunk after receiving followed by reading
// readableStream.on("data", (chunk) => {
//     console.log(chunk)
//     // console.log("////////////////////////////////////////////////////////////////////////////////////////////")
//     writableStream.write(chunk)
// })

// Or we can store fs.WriteStream in a variable and use it here.

// We can replace the above code with the pipe method.
readableStream.pipe(writableStream);