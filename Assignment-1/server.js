const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Welcome to Node.js Server");
});

server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
