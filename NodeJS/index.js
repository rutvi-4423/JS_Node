const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, content) => {
            if(err) {
                console.log(err.code);
                res.end('<h1>Something went wrong!!</h1>');
            };
            res.end(content);
        })
    }
    else {
        res.end('<h1>Page not found!</h1>');
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
