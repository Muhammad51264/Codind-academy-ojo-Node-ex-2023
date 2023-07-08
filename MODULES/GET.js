const http = require("http");

const options = {
  hostname: "127.0.0.1",
  port: 8080,
  path: "/users",
  method: "GET",
};

const req = http.request(options, (res) => {
  res.on("data", (data) => {
    console.log(data.toString()); // Process the response
  });
});

req.on("error", (error) => {
  console.error("Error:", error);
});

req.end();
