const fs = require('node:fs/promises')

async function readFile () {
    try {
        const data = await fs.readFile('./temp.txt', 'utf-8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile();

// console.log("First")
// fs.readFile('./temp.txt', 'utf-8')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// console.log("Second")

// The promise-based fs module can also be used with async/await. 