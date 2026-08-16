const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url == '/student') {
        const data = fs.readFileSync('data.json', 'utf-8');
        res.end(data);
    }
    else {
        res.writeHead(404);
        res.end('404 - Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
