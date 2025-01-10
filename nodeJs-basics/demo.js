"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var fs = require("fs");
var server = http.createServer(function (req, res) {
    fs.writeFileSync('request.txt', "Request url: ".concat(req.url, ", Request method: ").concat(req.method));
    console.log("Request url:", req.url, "Request method:", req.method);
});
server.listen(3000);
