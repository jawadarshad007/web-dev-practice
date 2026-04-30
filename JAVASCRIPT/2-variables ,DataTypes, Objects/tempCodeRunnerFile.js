const sym = Symbol("id")
const user3 = {
    name: "Bob",
    age: 25,
    0 : 100,
    4: 500,
    [sym]:"this is symbol"
}
console.log(user3[0])
console.log(user3[sym])