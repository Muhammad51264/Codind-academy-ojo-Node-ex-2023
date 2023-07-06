const http = require("http");
const axios = require('axios');
const fs = require('fs');

const hostName = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {

  if (req.url === "/file") {
    fs.readFile('file.txt', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
});

axios.get(`http://${hostName}:${port}`)
  .then(res => {
    console.log(res.data);
  })
  .catch(error => {
    console.log(error);
  });

