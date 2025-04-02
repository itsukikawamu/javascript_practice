const hungry_message = "i am hungry.";
const pass = "../text/hungry.txt";
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

let content = "Initial message.";
fs.writeFile("../text/test1.txt", content, ()=>{
    fs.readFile("../text/test1.txt", 'utf8', (err, data)=>{
        if (err){
            console.log("failed.", err);
            return;
        }
        content = `succeeded.\ndata: ${data}`;
        fs.writeFile("../text/test2.txt", content, ()=>{
            fs.readFile("../text/test2.txt", 'utf8', (err, data)=>{
                if (err){
                    console.log("failed.", err);
                    return;
                }
                content = `succeeded.\ndata: ${data}`;
                fs.writeFile("../text/test3.txt", content, ()=>{
                    fs.readFile("../text/test3.txt", 'utf8', (err, data)=>{
                        if (err){
                            console.log("failed.", err);
                            return;
                        }
                        content = `succeeded.\ndata: ${data}`;
                        
                    });
                });
            });
        });
    });
})
