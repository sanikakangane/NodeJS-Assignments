const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url == '/student') {
        const data = fs.readFileSync('data.json', 'utf-8');
        res.end(data);
    }

});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});