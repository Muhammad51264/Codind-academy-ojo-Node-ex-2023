const http =require("http");

const options = {
    hostname: "127.0.0.1",
    port: 8080,
    path: "/users",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  
  const user = { name: "Ashraf", age: 21 };
  
  const req = http.request(options, (res) => {
    res.on("data", (data) => {
      console.log(data.toString()); // Process the response
    });
  });
  
  req.on("error", (error) => {
    console.error("Error:", error);
  });
  
  req.write(JSON.stringify(user));
  req.end();

// fetch("http://localhost:8080/users")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data); // Process the response
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
  