const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log("Folder created successfully.");
// })

// fs.writeFile(path.join(__dirname, '/test', 'demoFile.txt'), "Hello FS", err => {
//     if(err) throw err;
//     console.log("File created successfully.");
// })

// fs.appendFile(path.join(__dirname, '/test/demoFile.txt'), "\nThis is appended.", err => {
//     if(err) throw err;
//     console.log("File updated successfully.");
// })

fs.readFile(path.join(__dirname, '/test', 'demoFile.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})