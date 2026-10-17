// Must vist coder army Notion lecture note for that video

// Scope , Closure, High Order Function


// Scope
// Global Scope-----------> Assible to all the code
// functional Scope--------> Only accessible inside the function    
// Block level Scope-------> Only accessible inside the block

// var respected function scope but dont respect block level scope
if(true){
    var a = 10
}
console.log(a) // 10
function test(){
    var b = 20
}
console.log(b) // ReferenceError: b is not defined
// let and const respect both function scope and block level scope



let global = "I am global variable";
function outer(){
    let global = "Global in outer Func"
    function inner(){
    // let global = "Global in inner Func"
        console.log(global) // pahle ya global apne block scope ma check kre ga , than ek step outer level pa check kre ga agr ise wahn bhi na mila to than aik step or outer level pa check kre ga.
    }
    inner()
}
outer()




// Closure:
//  A function that remembers variables from its outer scope even after the outer function has finished executing.
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        return count;
    }
    return increment; // return increment function reference 
}
let counter = createCounter()
console.log(counter())
console.log(counter())
console.log(counter())




let user = {
    balance : 500,
    deposit : function(amount){
        if (typeof amount==='number' && amount>0){
            this.balance+=amount
            return this.balance
        }
    }
}
console.log(user.deposit(200))


// Real world example of closure
// yahn ap ka object ka 3non functions hain jo ap ke balance ko access(remember) kr skte hain but ap direct balance ko access nai kr skte hain .
function createAccount(){
    let balance = 500;
    return { // return object that contain 3 functions 
    deposit: function(amount){
        if (typeof amount==="number" && amount>0){
            balance+=amount
            return balance;
        }
        else{
            return "Invalid amount"
        }
    },
    withDraw: function(amount){
        if (typeof amount==="number" && amount>0 && balance>=amount){
            balance-=amount
            return balance;
        }
        else{
            return "Invalid amount"
        }
    },
    getBalance: function(){
        return balance;
    }
}

}
let accountHold = createAccount()
console.log(accountHold.deposit(200))
console.log(accountHold.balance) // ab ap direct access nai kr skahte balance ko .







// High Order Function:
// A function that takes another function as an argument or returns a function as a result.

// returns a function as a result
// is ma clouser ka consept bhi use ho rha ha 
function outer(value){ // here outer function in high order function
    
    return function inner(num){
        console.log("I am inner function")
        return num*value;
    }

}
// const functionHolder = outer(4);
// console.log(functionHolder(5)) 

const functionHolder = outer(4)(5)// yahn outer(4) ki jaga inner function ka reference aa jahe ga , and then refernce 5 ko as a argument la kr call kare ga.
console.log(functionHolder)




// A function that takes another function as an argument
function greet(callback){
console.log("Hey!") 
callback()
}
function user(){
console.log("hELLO I am user")
}
greet(user)