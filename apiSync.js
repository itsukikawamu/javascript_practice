const path = "./helloSync.txt";
const inputData = "Bye Sync!";

console.log("[1]");

Deno.writeTextFileSync(path, inputData);
const data = Deno.readTextFileSync(path);
console.log("[2]", data);
console.log("[3]");


