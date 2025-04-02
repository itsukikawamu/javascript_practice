const fs = require('fs');

const promiseWriteFile=(path, content)=>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(path, content, (err, data)=>{
            if (err) reject(err);
            else resolve();
        })
    });
};
const promiseReadFile=(path)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(path, (err, data)=>{
            if (err) reject(err);
            else resolve(data);
        })
    });
};

let content = "hello promise chain.";

promiseWriteFile("../text/promise1.txt", content)
.then(()=>{
    console.log("writing is succeed.");
    return promiseReadFile("../text/promise1.txt");
})
.then((data)=>{ //resolve()の引数がthenに渡されます
    console.log("reading is succeed.");
    content = `succeeded.\ndata: ${data}`;
    return promiseWriteFile("../text/promise2.txt", content);
})
.then(()=> promiseReadFile("../text/promise2.txt")
//{}を書かない場合returnを省略するとpromiseReadFileの返り値がそのまま変える仕様
);
