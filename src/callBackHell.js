const fs = require('fs');

let content = "Initial message.";
fs.writeFile("../text/cbh1.txt", content, ()=>{
    fs.readFile("../text/cbh1.txt", 'utf8', (err, data)=>{
        if (err){
            console.log("failed.", err);
            return;
        }
        content = `succeeded.\ndata: ${data}`;
        fs.writeFile("../text/cbh2.txt", content, ()=>{
            fs.readFile("../text/cbh2.txt", 'utf8', (err, data)=>{
                if (err){
                    console.log("failed.", err);
                    return;
                }
                content = `succeeded.\ndata: ${data}`;
                fs.writeFile("../text/cbh3.txt", content, ()=>{
                    fs.readFile("../text/cbh3.txt", 'utf8', (err, data)=>{
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
    console.log("finished.");
});
console.log("writing files...");
