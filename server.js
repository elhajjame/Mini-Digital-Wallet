const http = require("http"); // built in node js module

// this function run every time  when u visit localhost..
const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    let body = '';
    // node js processes incomig data in stream if usser sends large file it devide it into small pieces, node doesnt wait for the whole thing 
    // req.on this is event listener means whatever a piece of data coming run this code    
    req.on('data', chunk => {
        body = body + chunk;
    });
    // when all data arrived 
    req.on('end', () => {
        body = body ? JSON.parse(body) : {};
    })
});

server.listen('3000', () => {
    console.log('server listening on port 3000');
});