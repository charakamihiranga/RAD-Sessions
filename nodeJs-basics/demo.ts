import * as http from "http";
// import * as fs from "fs"; 

const server = http.createServer((req, res) => {
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
    const body: Buffer[] = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split("=")[1];
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

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
