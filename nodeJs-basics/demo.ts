import * as http from 'http';
import * as fs from 'fs';

const server = http.createServer((req, res) => {
    fs.writeFileSync('request.txt', `Request url: ${req.url}, Request method: ${req.method}`);
    console.log("Request url:", req.url, "Request method:", req.method);
})

server.listen(3000)