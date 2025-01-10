"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    if (req.url === "/add") {
        fs.writeFile("demo.txt", req.url, function (err) {
            if (err) {
                res.write("<h1>Error: File not created</h1>");
            }
        });
        res.write("<h1>Hello Customer</h1>");
        return res.end();
    }
    res.write("<h1>Hello World</h1>");
    res.end();
    console.log("Request received", req);
    process.exit();
});
server.listen(3000, function () {
    console.log("Server is listening on port 3000");
});
