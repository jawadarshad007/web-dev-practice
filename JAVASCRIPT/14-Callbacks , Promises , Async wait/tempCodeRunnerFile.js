console.log("Start")
const responce = await fetch("https://api.github.com/users");
const data = await responce.json();
console.log(data);
console.log("End")