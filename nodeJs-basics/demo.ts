import * as http from 'http';

const server = http.createServer((req, res) => {
    console.log("Request url:", req.url, "Request method:", req.method);
})

server.listen(3000)