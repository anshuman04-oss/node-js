const buffer = new Buffer.from("Anshuman", "utf-8")

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())

buffer.write("Ankita") 

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())

buffer.write("Anshum") 

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())

buffer.write("AnshumanAcharya") 

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())

// Buffers have limited memory

// Is buffer a data structure in Node.js?