const fs =require("fs");
const readline = require('readline')
let userAnswer="";
let userContent="";
const interface=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  

async function input(){
try{
await fs.promises.access("./input.txt")
console.log("exist")
}catch(err){
console.error(err);
await fs.promises.writeFile("./input.txt","This is input file.")
}
}


async function output(){

    try{
    await fs.promises.access("./output.txt");
    interface.question(`Do you want to overwrite the file (Y/N)?`, answer => {
        userAnswer=answer;
        if (userAnswer === "Y") {
            interface.question("Write the new content.\n", answer =>{
                 userContent=answer;
                 fs.promises.writeFile("./output.txt",userContent);
                 interface.close();

             });
             
             }else{
                console.log("Operation was cancelled");
                try{
                    fs.promises.unlink("./input.txt");
                }catch(err){
                    console.log("no input file was found")
                }
                interface.close();

             }
      });
      
    }catch(err){
    console.error(err);
    }
    }


input();
output();