"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
// import * as fs from "fs"; 
var server = http.createServer(function (req, res) {
    if (req.url === "/add") {
        res.write("<Html>");
        res.write("<body>");
        res.write('<form method="post" action="/dashboard">');
        res.write('<input type="text" name="Name" />');
        res.write('<button type="submit" value="Submit" />Submit</button>');
        res.write("</form>");
        res.write("</body>");
        res.write("</Html>");
        res.end();
    }
    if (req.url === "/dashboard" && req.method === "POST") {
        var body_1 = [];
        req.on("data", function (chunk) {
            body_1.push(chunk);
        });
        req.on("end", function () {
            var parsedBody = Buffer.concat(body_1).toString();
            var name = parsedBody.split("=")[1];
            console.log(name);
        });
        res.write("<h1>Dashboard</h1>");
        res.end();
    }
    if (req.url === "/") {
        res.write("<h1>Landing page...</h1>");
        res.end();
    }
});
server.listen(3000, function () {
    console.log("Server is listening on port 3000");
});
