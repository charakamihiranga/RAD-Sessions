"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var routes_1 = require("./routes");
var server = http.createServer(routes_1.routings);
server.listen(3000, function () {
    console.log("Server is listening on port 3000");
});
