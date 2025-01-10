import express from "express";

const server = express()

server.get('/', (req, res, next) => {
  console.log(req);
  res.send('<h1>Express works...</h1>');
})

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
