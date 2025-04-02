const content = "i am hungry.";
const path = "../text/proomise1_hungry.txt";
const fs = require('fs');

const promiseWriteFile = (path, content)=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(path, content, (err)=>{
            console.log("result")
            if (err)
                reject(err);
            else
                resolve();
        });

    });
}

promiseWriteFile(path,  content)
.then(()=>{
    console.log("succeeded.");
})
.catch((err)=>{
    console.error('failed:', err);
})