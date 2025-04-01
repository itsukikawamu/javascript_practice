const { Person, judge } = require('./module');
const p1 = new Person("Mike", 19);
p1.introduce();
judge(p1);

console.log(process.argv);




