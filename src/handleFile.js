const pass = '../text/hungry.txt';
const content = "i am hungry.";

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
fs.writeFile(`${pass}-1`, content, writeResult);

fs.readFile(`${pass}-2`, 'utf8', (err, data)=>{
    if (err){
        console.log("failed.", err);
        return;
    }
    console.log("succeeded.");
    console.log("data:", data);
});
