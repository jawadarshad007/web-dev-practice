let b = 34.54234;
console.log( b.toFixed(3)) // Answer: 34.54 this method rounds the number to the specified number of decimal places. In this case, it rounds to 2 decimal places.
console.log(typeof b.toFixed(2)) // Answer: string

console.log(b.toPrecision(2)) // Answer: 34.5423 this method rounds the number to the specified length. In this case, it rounds to 6 significant digits.
console.log(typeof b.toPrecision(6)) // Answer: string

// convert number to string 
console.log(b.toString())

// create a Number object   
let a = new Number(45); 
console.log(a) // Answer: [Number: 45] this creates a Number object with the value of 45.
console.log(typeof a) // Answer: object


let c =new Number("123");
let d =new Number("123");
console.log(c ==  d) // Answer: false because c and d are two different Number objects, even though they have the same value. In JavaScript, when you create a new object using the `new` keyword, it creates a new instance in memory. Therefore, `c` and `d` are not the same object, and the strict equality operator (`===`) returns false.

// object comparison in JavaScript is based on reference, not value. When you compare two objects, it checks if they reference the same memory location, not if their contents are the same. Since `c` and `d` are two different objects, they do not reference the same memory location, and thus the comparison returns false.


console.log(Boolean({}))// Answer: true because in JavaScript, all objects are truthy, meaning they evaluate to true in a boolean context. An empty object (`{}`) is still considered an object and therefore is truthy.because it allocate memory for the object and it has some reference in memory, so it is considered true when converted to a boolean value.

// Non-Premetive reference base pa compare hote hn 
// Premetive : Copy by value 


// Maths
console.log(Math.abs(-4)) // Answer: 4 this method returns the absolute value of a number, which is the non-negative value of the number without regard to its sign. In this case, it converts -4 to 4.
console.log(Math.PI)
console.log(Math.floor(2.7)) // Answer: 2 this method rounds a number down to the nearest integer. In this case, it rounds 2.3 down to 2.
console.log(Math.ceil(2.3)) // Answer: 3 this method rounds a number up to the nearest integer. In this case, it rounds 2.3 up to 3.
console.log(Math.round(2.3)) // Answer: 2 this method rounds a number to the nearest integer. In this case, it rounds 2.3 down to 2 because it is closer to 2 than to 3.
console.log(Math.round(2.7)) // Answer: 3 this method rounds a number to the nearest integer. In this case, it rounds 2.7 up to 3 because it is closer to 3 than to 2.
console.log(Math.max(23,56,66,32))// Answer: 66 this method returns the largest of the given numbers. 
console.log(Math.min(23,56,66,32))// Answer: 23 this method returns the smallest of the given numbers. 
console.log( Math.random()) // Answer: a random number between 0 and 1. where 0 is included and 1 is not included.

console.log(Math.random() * 10) // Answer: a random number between 0 and 10. where 0 is included and 10 is not included.
console.log(Math.floor(Math.random() * 10)) //  this method rounds the random number down to the nearest integer, so it will give you a whole number between 0 and 9.
console.log(Math.floor(Math.random() * 6)+1) // it gives number 1 to 6.

// if you want to generate a random number between a specific range, you can use the following formula:
// Math.random() * (max - min+1) + min
console.log(Math.floor(Math.random()*(25-15+1))+15) // it gives number between 15 to 25.
// to generate OTP of 4 digits
console.log(Math.floor(Math.random()*(9999-1000+1))+1000) // it gives number between 1000 to 9999.

console.log( typeof Math.random)     

function random(){
    let num = 2340;
    let sqrt = Math.sqrt(num) 
    let Multiply = sqrt * 1239;
    let cube = Math.pow(Multiply,3);
    let divide = cube / 100000000;
    let Decimal_digits = (divide % 1).toString().split('.')[1]; 
    return Decimal_digits;
}
let randomFunc = random()
console.log(randomFunc) // it gives number between 15 to 25.


// we dont use Math.random to generate OTP because it is not secure and can be easily predicted. For generating OTPs, it is recommended to use a secure random number generator, such as the `crypto` module in Node.js or the `window.crypto` API in browsers, which provides a more secure way to generate random numbers.