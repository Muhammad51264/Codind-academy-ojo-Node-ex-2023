const path = require("path");
const url = require("url");
const os = require("os");
const { exec } = require('child_process');
const crypto =require("crypto");
const querystring = require("querystring");
const cluster = require('cluster');
const net = require('net');
const dns = require('dns');

// let examplePath=path.join(__dirname,"/car");
// console.log(examplePath);

// const exampleURL = "http://www.example.com:8080/path?query=value#fragment";
// let parseExample=url.parse(exampleURL);
// console.log(parseExample);



// console.log(os.homedir());

// const randomNumber= crypto.randomInt(0, 1000000);
// console.log(randomNumber);


// const hash = crypto.createHash('sha256', 'Hello World').digest('hex');  
 
// console.log(hash);

// let urlQuery = "name=value&key=value2";

// let parsedObject = querystring.parse(urlQuery);
// console.log(parsedObject);



// const command = 'dir';

// exec(command, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Error executing the command: ${error}`);
//     return;
//   }

//   if (stderr) {
//     console.error(`Command executed with errors: ${stderr}`);
//     return;
//   }

//   console.log(`Command output:\n${stdout}`);
// });


// const pingCommand ="ping www.google.com";
// exec(pingCommand, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing the command: ${error}`);
//       return;
//     }
  
//     if (stderr) {
//       console.error(`Command executed with errors: ${stderr}`);
//       return;
//     }
  
//     console.log(`Command output:\n${stdout}`);
//   });

  // const { spawn } = require('child_process');

  // // Spawn a new child process
  // const childProcess = spawn('ping',["www.google.com"]);
  
  // // Event listeners for child process events
  // childProcess.stdout.on('data', (data) => {
  //   console.log(`Child process stdout: ${data}`);
  // });

  // childProcess.stderr.on('data', (data) => {
  //   console.error(`Child process stderr: ${data}`);
  // });

// if (cluster.isWorker) {   //master - worker process
//   cluster.worker.kill();	
//   console.log('I am a worker');
//   process.exit();

// } else {
//   console.log('I am a master');
//   cluster.fork();
//   cluster.fork();

// }



// dns.lookup('www.google.com', function (err, addresses) {
//   console.log(addresses);
// });

const server = net.createServer((socket) => {

    console.log('Client connected.');

    socket.on('data', (data) => {
      console.log(`Received data from client: ${data}`);
  
     
      socket.write('Server response: Data received.');
    });
  
    
    socket.on('end', () => {
      console.log('Client disconnected.');
    });
  });
  
  const port = 3000;
  server.listen(port, () => {
    console.log(`TCP server started on port ${port}`);
  });

  const host = 'localhost';


// const client = net.createConnection({ host, port }, () => {
//   console.log('Connected to the server.');

//   // Send data to the server
//   client.write('Hello from the client!');
// });

// client.on('data', (data) => {
//   console.log(`Received data from the server: ${data}`);
// });

// client.on('end', () => {
//   console.log('Disconnected from the server.');
// });