const fs = require('node:fs')

console.log("First")
const fileContents = fs.readFileSync('./temp.txt', 'utf-8')
const fileContentsBuffer = fs.readFileSync('./temp.txt')
console.log(fileContents)
console.log(fileContentsBuffer.size)

// Above methods read the files synchronously.
// Often we want to read files asynchronously.

console.log("Second")

fs.readFile('./temp.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log("In readFile")
        console.log(data);
    }
})

console.log("Third")

fs.writeFile('./temp.txt', 'Hello World', (err) => {
    console.log("In writeFile")
})
console.log("Fourth")

// The writeFile function is always getting executed before the readFile function. This is because the readFile function is asynchronous and the writeFile function is synchronous.
// Is the writeFile function synchronous?
// The writeFile function is asynchronous.
// Can we make the writeFile function synchronous?
// Yes, we can make the writeFile function synchronous by using the writeFileSync function.

// A file which is written can also be updated using the appendFile function or 'a' flag in the writeFile function.

fs.appendFile('./temp.txt', ' Hello bhailog', (err) => {console.log("In appendFile")})
console.log("Fifth")

// Can we edit a part in the text file?
// Yes, we can edit a part in the text file by using the fs module.
// How??
// Ans - We can read the file, edit the part and then write the file again.
// Can we delete a part in the text file?
// Yes, we can delete a part in the text file by using the fs module.
// How??
// Ans - We can read the file, delete the part and then write the file again.

// There is a more recent, promise-based version of the fs module, which is fs/promises.