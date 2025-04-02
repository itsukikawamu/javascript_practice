const fs = require('fs');
const { PassThrough } = require('stream');

const promiseWriteFile=(path, content)=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(path, content, (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        })
    });
};
const promiseReadFile=(path)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf8', (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        })
    });
};

let content = "Initial message.";

promiseWriteFile("../text/promise1.txt", content)
.then(()=>{
    return promiseReadFile("../text/promise1.txt");
})

fs.writeFile("../text/promise1.txt", content, ()=>{
    fs.readFile("../text/promise1.txt", 'utf8', (err, data)=>{
        if (err){
            console.log("failed.", err);
            return;
        }
        content = `succeeded.\ndata: ${data}`;
        fs.writeFile("../text/promise2.txt", content, ()=>{
            fs.readFile("../text/promise2.txt", 'utf8', (err, data)=>{
                if (err){
                    console.log("failed.", err);
                    return;
                }
                content = `succeeded.\ndata: ${data}`;
                fs.writeFile("../text/promise3.txt", content, ()=>{
                    fs.readFile("../text/promise3.txt", 'utf8', (err, data)=>{
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