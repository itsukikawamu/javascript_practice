const path = "./helloAsync.txt";
const inputData = 
`結局の所はあえて非同期のシンタックスそのものを使いたい理由があって使うのではなく、
「同時に複数のことができる性質を持った非同期APIを使用するという目的」を達成するために、
難しい非同期処理のシンタックス(Promise chain, async/await)を書かざるを得ないというケースが多いだけです。`;

console.log("[1]");

Deno.writeTextFile(path, inputData)
.then(()=> Deno.readTextFile(path))
.then((data)=> console.log("[3]", data));

console.log("[2]");


