const http =require("http");
const fs = require("fs");
const hostName = "127.0.0.1";
const port = 8080;


const server = http.createServer((req, res) => {

  if (req.url === "/users") {
    
    res.setHeader('Content-Type', 'text/html');
    res.end("hello");
  }else if(req.url === "/trainees") {
    fs.readFile("index.html",(err, data) => {
        if (data){
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    })

} else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!");
  }
});

server.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
});