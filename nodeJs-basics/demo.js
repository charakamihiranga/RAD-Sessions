"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (req, res) {
    console.log("Request url:", req.url, "Request method:", req.method);
});
server.listen(3000);
