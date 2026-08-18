const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.end(`
            <h1>Home</h1>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);
    }

    else if (req.url == '/about') {
        res.end(`
            <h1>About Me</h1>
            <a href="/">Home</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);
    }

    else if (req.url == '/skills') {
        res.end(`
            <h1>Skills</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
        `);
    }

    else if (req.url == '/projects') {
        res.end(`
            <h1>Projects</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/contact">Contact</a>
        `);
    }

    else if (req.url == '/contact') {
        res.end(`
            <h1>Contact Details</h1>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/skills">Skills</a>
            <a href="/projects">Projects</a>
        `);
    }

    else {
        res.end("404 - Page Not Found");
    }

});

server.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});