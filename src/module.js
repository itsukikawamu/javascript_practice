function sayHello(name){
    console.log(`Hello! ${name}`);
}

function sayAge(age){
    console.log(`I'm ${age} years old.`);
}

class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    introduce(){
        sayHello(this.name);
        sayAge(this.age);
    }
}

const judge = (person)=>{
    if (person.age >= 20){
        console.log(`${person.name} is allowed to drink.`);
    }
    else {
        console.log(`${person.name} is NOT allowed to drink.`)
    }
}

const p1 = new Person("Mike", 19);
p1.introduce();
judge(p1);

module.exports = {
    Person,
    judge,
};