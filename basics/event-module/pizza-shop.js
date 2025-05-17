const eventEmitter = require('node:events')

class pizzaShop extends eventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order (size, toppings) {
        // In the order function, we are emitting the order function with relevant parameters.
        this.orderNumber++;
        this.emit('order', size, toppings)
    }

    displayOrderNumber () {
        console.log(`Current order number ${this.orderNumber}`)
    }
}

module.exports = pizzaShop;