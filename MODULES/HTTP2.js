const http = require("http");
const fs = require("fs");
const hostName = "127.0.0.1";
const port = 8080;

let users = []; // Array to store users
const trainees = [
    { name: "John", age: 25 },
    { name: "Alice", age: 23 },
    { name: "Bob", age: 27 }
  ];
const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    if (req.method === "GET") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(users));
    } else if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const user = JSON.parse(body);
        users.push(user);
        res.statusCode = 201; // Created
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(users));
      });
    } else {
      res.statusCode = 404; // Not Found
      res.end();
    }
  } else if (req.url === "/trainees") {
    if (req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(trainees));
      } else {
        res.statusCode = 404; // Not Found
        res.end();
      }
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
})



