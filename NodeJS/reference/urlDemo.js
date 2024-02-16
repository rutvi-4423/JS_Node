const url = require('url');

const myUrl = new URL("https://www.youtube.com/watch?v=fBNz5xF-Kx4");

// console.log(myUrl.href);
// console.log(myUrl.toString());
// console.log(myUrl.toJSON());

// console.log(myUrl.host);
// console.log(myUrl.hostname);
// console.log(myUrl.pathname);
// console.log(myUrl.search);
// console.log(myUrl.searchParams);
// console.log(myUrl.origin);
// console.log(myUrl.password);
// console.log(myUrl.protocol);
// console.log(myUrl.port);
console.log(myUrl.auth);