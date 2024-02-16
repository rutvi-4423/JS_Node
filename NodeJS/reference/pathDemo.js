const path = require('path');

// console.log(path.basename(__filename));

// console.log(path.dirname(__filename));

// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

// console.log(process.env.PATH);
// console.log(process.env.PATH.split(path.delimiter));

// console.log(path.isAbsolute('/foo/bar')); 
console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));