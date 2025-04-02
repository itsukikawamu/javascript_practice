const hungry_message = "i am hungry.";
const pass = "../text/cb_hungry.txt";
function writeResult(err){
    console.log("result")
    if (err){
        console.error('failed:', err);
        return;
    }
    else{
        console.log("succeeded.");
    }
}
const fs = require('fs');
fs.writeFile(pass, hungry_message, writeResult);