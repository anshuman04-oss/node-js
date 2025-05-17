// const superman = require("./superman");

// const superHero = require("./superHero");

// const batman = require("./batman");

// // const sm = require("./add");

// superman();
// batman();

// console.log(sm(6, 65));

// const superHero = require('./superHero');
// console.log(superHero.getName());
// superHero.setName("Shaktiman");
// console.log(superHero.getName());

// const newSuperHero = require('./superHero')
// console.log(newSuperHero.getName())

// const superHero = require('./superHero')

// const Batman = new superHero("Batman");
// console.log(Batman.getName());
// Batman.setName("Spider man");
// console.log(Batman.getName());

// const Shaktiman = new superHero("Shaktiman");
// console.log(Shaktiman.getName());

// maths = require("./math")

// console.log(maths.add(2, 3));
// console.log(maths.difference(2, 3));

// const data = require("./data.json");

// console.log(data)

const path = require('path')

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2", "index.html"))

// console.log(path.join(__dirname, './data.json'))

// console.log(path.resolve(__dirname, "folder1", "folder2", "index.html"))
// console.log(path.resolve("folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve("/folder1", "//folder2", "../index.html"))
// console.log(path.resolve(__dirname, "data.json"))

function greet(name) {
    console.log(`Hello ${name}`);
}

function greetBilluBhai(greetFn) {
    greetFn("Billu Bhai");
}

greetBilluBhai(greet)

