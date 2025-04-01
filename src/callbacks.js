const Btn = document.getElementById("Btn");
const max = 5;
const min = 1

window.alert("can you see me?");

let rand = ()=> {
    let num = Math.random() * (max - min) + min;
    return Math.round(num * 100) / 100;
};


Btn.addEventListener("click", ()=>{
    let sec = rand();
    setTimeout(()=>{
        console.log("1.", sec, "seconds");
        console.log("loading");
        sec = rand();
        setTimeout(()=>{
            console.log("2.", sec, "seconds");
            console.log("loading");
            sec = rand();
            setTimeout(()=>{
                console.log("3.", sec, "seconds");
                console.log("finished");
            }, sec * 1000);
        }, sec * 1000);
    }, sec * 1000);
    console.log("0");
    console.log("loading");
});

