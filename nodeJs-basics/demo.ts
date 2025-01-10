import * as http from "http";
import { routings } from "./routes";

const server = http.createServer(
    routings
);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
