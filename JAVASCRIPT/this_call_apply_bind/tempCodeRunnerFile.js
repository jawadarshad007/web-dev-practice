const user00 = {
    name : "Jawad",
    greet : ()=>{
        console.log(this)// yahn pa ya apne sa baher scope ko dekhe ga yani object sa baher.
    }
}
user00.greet()