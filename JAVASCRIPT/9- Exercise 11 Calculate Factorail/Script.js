let num = 5;
let arr=[];
for (let i = 1; i <= num; i++) {
              arr.push(i)       
}
console.log(arr)

// calculate factorail by Reduce
const red =(a,b)=>{
    return a * b;
}
console.log("Factorail by reduce" , arr.reduce(red))


// calculate factorail by for loop
let product=1;
for (let index = 1; index <= num; index++) {    
    product = product * index
}
console.log(`factorail by loop ${product}`);