// Code run  in Execution Context:
// Execution Context has 2 steps:
// 1. Memory allocation
// is step ma variables ko memory ma allocate kiya jata ha and inko value inilize nai hoti , unko undefined value di jati ha and functions ka pura code allocate kiya jata ha

// 2. Execution Phase(Runtime,Line by line execution)
// is step ma code ko execute kiya jata ha and variables ko value di jati ha. 


var a = 10;
var b = 20;

var sum = addNumbers(a, b);
console.log(sum)

function addNumbers(x, y) {
    return x + y;
}
// Memory after hoisting
// Identifier	  Memory value after hoisting
// a	          undefined
// b	          undefined
// sum	          undefined
// addNumbers	   Full function stored
// 👉 Important:
// Functions are fully hoisted, variables declared with var are hoisted as undefined.



//              💡 The Hoisting Magic Here
// Even though the function is written at the bottom, this works:
// Because in creation phase, the function was already placed in memory.
// If it were a function expression, this would fail.





// in case of let and const 
// Memory allocaition phase 
// IS phase ma let and const variables ko memory ma allocate kiya jata ha but unko value inilize nai kiya jata ha , unko Temporal Dead Zone(TDZ) ma rakha jata ha and jab tak unko value inilize nai kiya jata ha tab tak unko access nai kiya ja sakta ha.

// a = <uninitialized> (Temporal Dead Zone)..... mean isko memory allocate to hoa ha but isko koi access nai kr skahta ha jab tak isko value inilize nai kiya jata ha.
// b = <uninitialized> (Temporal Dead Zone)
// result = <uninitialized> (Temporal Dead Zone)
// sum = <uninitialized> (Temporal Dead Zone)

// Execution phase
// a = 10
// b = 20
// result = abi temporal dead ma ha  iselia is ko access nai kiya ja sakta ha, therefore error aayega
// sum 
let a = 10;
const b = 20;


let result = sum(a,b)
console.log(result)

// const sum = function(x,y){
//     return x+y;
// }
const sum = (a,b) => a+b;












//
let a ;
console.log(a) // is code ma a ki value undefined ha because a ko memory ma allocate to kar diya gaya ha but usko value inilize nai kiya gaya ha, isko undefined value di gayi ha.
