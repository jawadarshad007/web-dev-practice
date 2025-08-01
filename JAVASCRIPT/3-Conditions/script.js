// Harry Notes are important
console.log("Conditions tuturiols")
let age=17
let grace=2
age++
console.log(age)    
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace) //it means 17 ki power 2
console.log(age % grace) //it means modules that shows remainder
if((age+grace)>18){
    console.log("u drive")
}
else{
    console.log("U cannot drive")
}


let num1 = 9;
let num2 = 9.0;
console.log(num1 == num2); // returns ture/false  by comparing values(it checks only values not datatypes)

let a = "4";
let a1= "3";
if(a===a1) // it checks both values and dataTypes
    {
    console.log("yes")
}
else{
    console.log("No")
}
console.log("Hello coders am i Back with new energy ")

//ternary operators
a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log(c)

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/
