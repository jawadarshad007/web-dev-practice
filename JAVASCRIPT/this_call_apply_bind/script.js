// use strict mode vs non-strict mode


// in non-strict mode
let a=10;
b = 20;
console.log(a , b)


// but in strict mode (ES5 and later) 
// Strict mode JavaScript ko zyada safe, clean, aur error-prone cheezon se bachata hai.
"use strict";  // You have to writw this line to enable strict mode
let x = 10;
y = 20;
console.log(x,y) // this will throw an error because y is not declared with var, let or const




// global object : In browser the global object is 'window', in node.js it is 'global'
// console.log(global) // ya node.js is ko use karta hai
console.log(window) // ya browser is ko use karta hai

// globalThis: points to the global object regardless of the environment (browser or node.js)
console.log(globalThis) // globalThis is a standard way to access the global object in any environment



// this keyword
console.log(this)
// this keyword in global scope(NODE.JS) points to Empty object
// this keyword in global scope(Browser) points to window object

const user99 = {
    name: "John",
    age: 30,
    greet: function() {
        console.log( "Hi", this.name) // yahn pa this keyword user object ko refer kar raha hai(beacuse its check ka greet wale funciton ko call kis na kia ha).
        console.log(this) // prove that this refers to user99 object
    }
}
user99.greet() // Hi John

const user2 ={
    name: "Alice"
}
user2.greet = user99.greet // we are borrowing the greet method from user99 object
user2.greet() // Hi Alice, this shows that this keyword is dynamic and depends on how the function is called, not where it is defined.


'use strict';
console.log(this)
function greet2() {
    console.log(this) // in strict mode, this will be undefined, because in strict mode, if a function is called without an object context, this will be undefined instead of the global object.
}
greet2();


// normal function : without strict mode, this will refer to the global object (window in browser, global in node.js)    and with strict mode, this will be undefined



// Yhan pa memory bach rahe ha , agr hme 500 user funciton chahiye to hm 500 bar greet function nahi likhenge, hm ek hi greet function likhenge aur usko alag alag user object ke sath call karenge, is se memory bach jayegi aur code bhi clean rahega.
function greet() {
    console.log("Hi" , this.name) 
}
           
function incrementAge(value ,name) {
    this.age+=value;
    this.name = name; // this will update the name property of the object that is calling the function
    console.log(`Age after increment ${this.age}`)
    console.log(`New Name ${this.name}`);
}
const user={
    name: "John",
    age: 30,
}
// const user2 = {
//     name: "Alice",
//     age: 25,
// }
greet() // this will be undefined because global object does not have a name property
// agr hm chahte function ko donon objects use kr skahn 
greet.call(user) // yahn pa greet funtion ka this keyword user object ko refer kar raha hai, is liye output hoga "John"
greet.call(user2) // yahn pa greet funtion ka this keyword user2 object ko refer kar raha hai, is liye output hoga "Alice"
// incrementAge.call(user, 5) // yahn pa pahle argument jis ko this keword refer kre ga. AND second agrmuent fucntion ke parameter ko refer krta hai.
incrementAge.call(user2, 3, "Bob") 
incrementAge.apply(user, [2, "Mike"])   // apply method me arguments array ke form me pass krte hai
const incr = incrementAge.bind(user, 10, "Mohan")  // bind ise waqt call nahi karta, balki ek naya function return karta hai, app is ko bad ma call kr skahte ho.
incr()


class userclass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hi", this.name)
    }
}
// this : {name: "John", age: 30}  this is the object that is created when we use the new keyword to create an instance of the user class.
const userobj = new userclass ("John", 30);
// jab bhi app new keyword ka use karte ho,to wo aik new empty object bana deta ha .
console.log(userobj)





// Arrow functions do not have their own this. They inherit this from the surrounding (lexical environment scope) context.
console.log(this)
// const greet = ()=>{
//     console.log(this) 
// }
greet() 

//problem in normal function
const stopwatch = {
    second : 0,
    start : function(){
        setInterval(function(){
            console.log(this)    // here this points to global object
            this.second++;
            console.log(this.second) // is fucntion ko setInterval na invoke kia ha , is lia this is ko refer kre ga .
        },1000)
    }
}
stopwatch.start()


//solution by callback arrow function
const stopwatch2 = {
    second : 0,
    start : function(){
        setInterval(() =>{
            // yahn ma arrow func ka this apne bhar wale scope sa this ko point kre ga 
            this.second++;
            console.log(this.second) 
        },1000)
    }
}
stopwatch2.start()





const user00 = {
    name : "Jawad",
    greet : ()=>{
        console.log(this)// yahn pa ya apne sa baher scope ko dekhe ga yani object sa baher.
    }
}
user00.greet()



// this keyword in DOM effect
let btn = document.getElementById("first")
btn.addEventListener("click", function(){
    console.log(this)// ya ise button element ko point kre ga
})

// arrow func
let btn2 = document.getElementById("first")
btn2.addEventListener("click", ()=>{
    console.log(this)// yahn pa this global obj ko pont kre ga
})



// All imp points of this lecture
// this keyword in global scope = Node.js me empty object, Browser me window object
// In function : if someone invoke it , to this will refer to the object that is invoking the function, if no one invoke it, then in non-strict mode this will refer to global object, and in strict mode this will be undefined.


// arrow functions do not have their own this, they inherit this from the surrounding context.