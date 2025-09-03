import fs from "fs/promises";
 await fs.appendFile("hello.txt", "\nThis is appended text.");
let a = await fs.readFile("hello.txt", "utf-8");
console.log(a);