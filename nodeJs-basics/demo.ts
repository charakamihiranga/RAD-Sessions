import * as http from "http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/add") {
    fs.writeFile("demo.txt", req.url, (err) => {
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

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
