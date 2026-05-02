let email  = ["mo@gm" , "ra@gm", "rt@gm", "mo@gm"]
let uniqueEmail =  new Set(email)
// to iterate over set
for (let num of uniqueEmail){
    console.log(num)
}
console.log(uniqueEmail)
// to convert set to array using spread operator
console.log([...uniqueEmail])
uniqueEmail = [...new Set(email)]
console.log(uniqueEmail)