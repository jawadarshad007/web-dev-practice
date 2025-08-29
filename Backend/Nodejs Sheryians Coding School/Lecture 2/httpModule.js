const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello from the HTTP module");
})
server.listen(3000);
