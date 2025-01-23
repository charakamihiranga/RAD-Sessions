import bodyParser from "body-parser";
import express from "express";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/send", (req, res, next) => {
    console.log(req);
    res.send('<html><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body></html>');
});
app.post("/message", (req, res, next) => {
    console.log(req.body.message);
    res.send("<h3>Message Endpoint Called</h3>");
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
