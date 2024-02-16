const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v1());
// // console.log(uuid.v3()); // ERROR!
// console.log(uuid.v4());
// // console.log(uuid.v5()); // ERROR!

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg})
    }
}

module.exports = Logger;