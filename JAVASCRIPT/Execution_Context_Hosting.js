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
//              💡 The Hoisting Magic Here
// Even though the function is written at the bottom, this works:
// Because in creation(Memory allocaiton) phase, the function was already placed in memory.
// If it were a function expression, this would fail.

function addNumbers(x, y) {
    return x + y;
}
var sum = addNumbers(a, b);
console.log(sum)
// Memory allocation phase(of above code)
// a = undefined
// b = undefined
// addNumbers = Full function stored
// sum = undefined


// Execution phase(of above code)
// a = 10
// b = 20
// sum = addNumbers(a,b) => 30


console.log(a)
var a = 10;
console.log(a)
// Memory allocation phase
// a = undefined

// Execution phase
// console.log(a) // undefined
// a = 10
// console.log(a) // 10



// Memory after hoisting
// Identifier	  Memory value after hoisting
// a	          undefined
// b	          undefined
// sum	          undefined
// addNumbers	   Full function stored
// 👉 Important:
// Functions are fully hoisted, variables declared with var are hoisted as undefined.








// in case of let and const 
// Memory allocaition phase 
// IS phase ma let and const variables ko memory ma allocate kiya jata ha but unko value inilize nai kiya jata ha , unko Temporal Dead Zone(TDZ) ma rakha jata ha and jab tak unko value inilize nai kiya jata ha tab tak unko access nai kiya ja sakta ha.
//  (Temporal Dead Zone)..... mean isko memory allocate to hoa ha but isko koi access nai kr skahta ha jab tak isko value inilize nai kiya jata ha.



console.log(a) // it will give error because a is in temporal dead zone(TDZ) and it is not initialized yet.
let a = 10;
const b = 20;
const addNumbers = function(x, y) {
    const sum = x + y;
    return sum;
}
const result = addNumbers(a, b);
console.log(result)
//           Memory allocation phase
// a = <uninitialized> (Temporal Dead Zone)..... mean isko memory allocate to hoa ha but isko koi access nai kr skahta ha jab tak isko value inilize nai kiya jata ha.
// b = <uninitialized> (Temporal Dead Zone)
// addNumbers = <uninitialized> (Temporal Dead Zone) because addNumbers is a variable
// result = <uninitialized> (Temporal Dead Zone)
// sum = <uninitialized> (Temporal Dead Zone)

//           Execution phase
// a = 10
// b = 20
// addNumbers = Now initialized with function code
// result = 30;
// sum 





let a = 10;
const b = 20;

const result = addNumbers(a, b);
console.log(result)

const addNumbers = function(x, y) {
    const sum = x + y;
    return sum;
}

//           Memory allocation phase
// a = <uninitialized> (Temporal Dead Zone)..... mean isko memory allocate to hoa ha but isko koi access nai kr skahta ha jab tak isko value inilize nai kiya jata ha.
// b = <uninitialized> (Temporal Dead Zone)
// result = <uninitialized> (Temporal Dead Zone)
// addNumbers = <uninitialized> (Temporal Dead Zone) because addNumbers is a variable
// sum = <uninitialized> (Temporal Dead Zone)

//           Execution phase
// a = 10
// b = 20
// result = error because addNumbers is not initialized yet, it is still in Temporal Dead Zone(TDZ)





//                    Hoisting in JavaScript
// Hoisting is JavaScript's behavior of knowing about a variable or function's existence before executing the code. How it treats that knowledge depends on the keyword (function, var, let, or const).
// - function` : Hoisted completely (name and body).
// - var` : Hoisted and initialized with `undefined`.
// - let`/`const`: Hoisted, but not initialized. They are put in a Temporal Dead Zone.






 

//
let a ;
console.log(a) // is code ma a ki value undefined ha because a ko memory ma allocate to kar diya gaya ha but usko value inilize nai kiya gaya ha, isko undefined value di gayi ha.
