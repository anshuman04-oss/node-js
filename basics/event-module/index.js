// const eventEmitter = require('node:events')
// // Why is the constant eventEmitter and not event??
// // The events module returns a class called EventEmitter that encapsulates functionality to emit events and respond to them.
// // The eventEmitter is a constant that holds an instance of the EventEmitter class.
// What is an event??
// Ans - An event is a signal that indicates that something has happened.
// What is the type of an event??
// Ans - An event can be of any type, like a click, a keypress, a mouse movement, etc.

// const emitter = new eventEmitter()

// // We are registering a listener to respond to the event 'order-pizza'
// // First parameter is the event name and teh second is the callback function as a callback function allows us to delay execution till an event has occured.
// emitter.on('order-pizza', (size, topping) => {
//     console.log(`Pizza ordered successfully! here is your ${size} pizza with ${topping} topping`)
// })

// // Multiple listeners can be registered for the same event
// emitter.on('order-pizza', (size) => {
//     if(size === 'large'){
//         console.log('Accessories provided')
//     }
// })

// console.log('This should be executed first')
// emitter.emit('order-pizza', 'large', 'vanilla')
// // The first parameter is the event name and the rest are addtitional parameters that would be passed to the callback in the on function of the emitter class.




const pizzaShop = require('./pizza-shop')   // Imported the class pizzaShop from the pizza-shop.js file
const drinkMachine = require('./drink-machine')

const shop = new pizzaShop()    // Instantiated the class pizzaShop
const drink = new drinkMachine()

shop.on("order", (size, toppings) => {
    console.log(`Pizza ordered successfully! here is your ${size} pizza with ${toppings} topping`)
    drink.serveDrink(size)
})



shop.emit('order', 'large', 'vanilla')

shop.order("small", 'vanilla')
shop.displayOrderNumber();
// This is always giving 1.


// So, in a nutshell, working of event module is:
// 1. To emit a function.
// 2. After encountering the emit function, it will move to the on function to listern the emit and will check what to do when an event is emitted.
// 3. Program will get terminated after the method is on after getting emitted and then getting off.

// What does off function do in an event emitter??
// To remove a previously registered event listener.
