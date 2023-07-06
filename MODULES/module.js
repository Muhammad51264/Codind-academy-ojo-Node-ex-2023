const fs = require("fs");
fs.readFile("example.txt",  (err, data ) => {
    if (err) {
        console.error(err);
    return;
    }
    console.log(`file contents: ${data}`)
})


fs.promises.appendFile("example.txt", "\nHello,World")