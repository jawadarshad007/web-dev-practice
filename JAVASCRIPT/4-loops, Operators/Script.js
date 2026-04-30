console.log("I am a tutorial on Loops")

// let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }
// For-In Loop
let emp = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
for (let keyPart in emp) {  
        console.log("Key:",keyPart ,"Value:",emp[keyPart])
        // const element = obj[keyPart];
        // console.log(keyPart , element);
}

//For-Of Loop
// let str="ApnaCollege";
// for (let i of str){
//     console.log("i = ",i);
// }


let str="ApnaCollege";
let size = 0;
for (let val of str){
    console.log("Value = ",val);
    size++;
}
console.log("Size of string: ",size);

// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }


//while loop
let i=1;
while(i<5){
    console.log(i)
    i++    
}

//Do while loop
// let i = 10;
// do {
//     console.log(i)
//     i++;
// } while (i<6);


// Operators
// 1. Arithmetic Operators
let x = 10;
let y = 3;
console.log("x + y = ", x+y) // Ans = 13    
console.log("x - y = ", x-y) // Ans = 7
console.log("x * y = ", x*y) // Ans = 30
console.log("x / y = ", x/y) // Ans = 3.3333333333333335
console.log("x % y = ", x%y) // Ans = 1 (modulo operator, remainder of division)

console.log(5**2) // Ans = 25 (exponentiation operator, 5 raised to the power of 2)
// 2. Assignment Operators
let a1 = 10;
a1 += 5; // a1 = a1 + 5
console.log("a1 = ", a1) // Ans = 15
a1 -= 3; // a1 = a1 - 3
console.log("a1 = ", a1) // Ans = 12
a1 *= 2;

// 3. Comparison Operators
console.log("x > y = ", x>y) // Ans = true
console.log("x < y = ", x<y) // Ans = false 
console.log("x >= y = ", x>=y) // Ans = true
console.log("x <= y = ", x<=y) // Ans = false
console.log("x == y = ", x==y) // Ans = false (loose equality operator, checks value only)
console.log("x === y = ", x===y) // Ans = false (strict equality operator, checks value and type)
console.log("x != y = ", x!=y) // Ans = true (loose inequality operator, checks value only)
console.log("x !== y = ", x!==y) // Ans = true (strict inequality operator, checks value and type)




//logical operators
console.log(true && true)
console.log(true || false)



// and operator ma agr pahle value true ha to wo second value return kr deta ha .
// agr pahle value false ha to wo first value return kr deta ha.
let a= "Rohit";
let b= "Mohit";
console.log(a&&b) // Ans = Mohit... is ma wo pahle check kre ga ka first value(Rohit) true ha than wo result ma second value return kr dega.
console.log("" && "Mohit") // Ans = ""...  here "" is falsy value so wo "" return kr dega. 
console.log(0 && 20) // Ans = 0... here 0 is falsy value so wo 0 return kr dega.

// or operator ma agr pahle value true ha to wo first value return kr deta ha .
// agr pahle value false ha to wo second value return kr deta ha.
console.log(a||b) // Ans = Rohit... is ma wo pahle check kre ga ka first value(Rohit) true ha than wo result ma first value return kr dega.
console.log("" || "Mohit") // Ans = Mohit...  here "" is falsy value so wo second value "Mohit" return kr dega. 
console.log(0 || 20) // Ans = 20... here 0 is falsy value so wo second value 20 return kr dega.



// COnversion of data types (String to Number)
let z = "10"; 
let q = Number(z) 
console.log(q)

let num = 20303;
let strNum = String(num);
console.log(strNum, typeof num, typeof strNum)

let mix = "100ac";
let converted = Number(mix);
console.log(converted, typeof(converted)) // Ans = NaN (Not a Number, because "100ac" cannot be converted to a valid number)

console.log(Number(true)) // Ans = 1 (true is converted to 1)
console.log(Number(false)) // Ans = 0 (false is converted to 0)

console.log(Boolean(10)) // Ans = true (non-zero numbers are converted to true)
console.log(Boolean(0)) // Ans = false (zero is converted to false)
console.log(Boolean("")) // Ans = false (empty string is converted to false)
console.log(Boolean("Hello")) // Ans = true (non-empty strings are converted to true)


// Computer Science Problem 
let mm = "0.2";
let nn =  "0.1";
console.log(mm+nn) // Ans = 0.30000000000000004 (due to floating-point precision issues in JavaScript)

// let store 0.25 (First convert it in binary)
// 0.25 * 2 = 0.5 (integer part is 0)
// 0.5 * 2 = 1.0 (integer part is 1)
// 0.0 * 2 = 0.0 (integer part is 0)
// So, 0.25 in binary is 0.01 (0.25 = 0*2^-1 + 1*2^-2 + 0*2^-3 + ...)


// let convert 0.2 (First convert it in binary)
// 0.2 * 2 = 0.4 (integer part is 0)
// 0.4 * 2 = 0.8 (integer part is 0)
// 0.8 * 2 = 1.6 (integer part is 1)
// 0.6 * 2 = 1.2 (integer part is 1)
// 0.2 * 2 = 0.4 (integer part is 0)
// So, 0.2 in binary is 0.001100110011... (0.2 = 0*2^-1 + 0*2^-2 + 1*2^-3 + 1*2^-4 + 0*2^-5 + 0*2^-6 + 1*2^-7 + 1*2^-8 + ...)




// Rules in JS
// 1. Null is loosely equal to undefined, but not strictly equal.
console.log(null==undefined)
console.log(null===undefined)
// 2
console.log("Rohit" == "Mohit") // Ans = false (here it compare ascii values of characters, 'R' has ascii value 82 and 'M' has ascii value 77)


// ap jab bhi null, strings, boolean ko compare kare ga kisi cheez sa to wo pahle number pa convert hn gyn . <,>,<=,>= ye operators jab bhi null, strings ko compare kare ga to wo pahle number pa convert hn gyn . 
console.log(null>=0); // Ans = true (null is converted to 0, so the comparison becomes 0 >= 0, which is true)
console.log(null>0); // Ans = false (null is converted to 0, so the comparison becomes 0 > 0, which is false)
console.log(10 == '10') // Ans = true (loose equality operator, '10' is converted to 10 before comparison)
console.log(10 === '10') // Ans = false (strict equality operator, checks value and type, so 10 (number) is not equal to '10' (string))
console.log(10<=true) // Ans = false (true is converted to 1, so the comparison becomes 10 <= 1, which is false)
console.log(null<="") // Ans = true (null is converted to 0 and empty string is converted to 0, so the comparison becomes 0 <= 0, which is true)



