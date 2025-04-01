const { Person, judge } = require('./module');
const p1 = new Person("Mike", 19);
p1.introduce();
judge(p1);

console.log(process.argv);



function writeContent(err){
    if (err) {
        console.error('failed:', err);
        return;
    }
    else {
        console.log("succeeded.");
    }
};

const fs = require('fs');
const pass = '../text/profile.txt';
const content = "i am hungry.";
f = fs.writeFile(pass, content, writeContent);