const fs = require('fs')
const path = require('path')

// Create folder

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created..');
// })

// Create a file

fs.appendFile(path.join(__dirname,'/test', 'hello.txt'), 'Hello World', err => {
    if(err) throw err;
    console.log('File wrote to..');
})

fs.writeFile(path.join(__dirname,'/test', 'hello.txt'), 'I love Node.js', err => {
    if(err) throw err;
    console.log('File wrote to..');
})

