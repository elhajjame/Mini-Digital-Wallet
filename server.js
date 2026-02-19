const http = require("http");


const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'application/json');
    let body = '';
    req.on('data', chunk => {
        body = body + chunk;
    });
    req.on('end', () => {
        body = body ? JSON.parse(body) : {};
    })
});

server.listen('3000', () => {
    console.log('server listening on port 3000');
});