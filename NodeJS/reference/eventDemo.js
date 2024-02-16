const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

// myEmitter.on('event', () => console.log('Event Fired!'));
// myEmitter.emit('event');

// myEmitter.on('event', function(a, b) {
//     console.log(a, b, this, this === myEmitter);
// });
// myEmitter.emit('event', 'a', 'b');

// myEmitter.on('event', (a, b) => console.log(a, b, this, this === myEmitter));
// myEmitter.emit('event', 'a', 'b');

// myEmitter.on('error', (err) => {
//     console.log(err.msg)
// });
// const error1 = new Error();
// error1.msg = 'whoops! there was an error';
// myEmitter.emit('error', error1);
