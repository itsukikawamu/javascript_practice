const pc = require("os");
console.log(pc.platform());

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
const pass = '../text/profile.txt';
const content = "i am hungry.";
fs.writeFile(pass, content, writeResult);
fs.readFile(pass, 'utf8', (err, data)=>{
    if (err){
        console.log("failed.", err);
        return;
    }
    console.log("data:", data);
});
