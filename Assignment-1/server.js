const http = require('http')

const server = http.createServer((req, res) => {
    res.write("Welcome to Node.js Server");
    res.end();
})

server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
})