// Prototype...
// Simple words mein:
// Prototype wo mechanism hai jiske through ek object dosre object ki properties aur methods inherit karta hai.

const obj = {

    name: "Coder Army",
    age: 5,
    printName: function() {
        console.log("The name is " + this.name);
        
    }
}
console.log(obj)
obj.printName()


// to check if the object has a property
console.log(obj.hasOwnProperty("name"))
console.log(obj.toString())
// .hasOwnProperty() and .toString() manie object ma create hi nai kie , ya aa khain sa rahn hn ..?
// Ya properties object ka prototype ma create hoti hn.
// App jitna bhi objects banate hn wo sab object.prototype ko point karte hn, to unko bhi ye properties mil jati hn.
console.log(Object.prototype) // this will show the prototype of the object(run on  browser console to see the prototype)

const obj2 = {
    account: 1234
}
console.log(obj2.name)
// to inherit the properties of the object
// is sa obj2, obj1 ko bhi point kar raha hai , to obj2 ma bhi name property aa jayegi
obj2.__proto__ = obj;
console.log(obj2.name)
console.log(obj2.toString())



// jab bhi ap ko aik level uper jana ha ap ko __proto__ ka use karna ha.
// Example
console.log(Array.prototype) // this will show the prototype of the array(run on  browser console to see the prototype)
console.log(Array.prototype.__proto__) // this will show the prototype of the array's prototype jo ka object prototype ha (run on  browser console to see the prototype)


// Array ka bhi apna array.prototype hota hai, to array ke bhi apne methods hote hn, jaise push, pop, shift, unshift etc.
console.log(Array.prototype)
// ya Array.prototype , object.prototype ko bhi point kar raha hai, to array ke bhi object ke methods mil jate hn, jaise toString, hasOwnProperty etc.
console.log(Array.prototype.__proto__ === Object.prototype) // true
// is lia array ko objects bhi kaha jata hai.

// functions ka bhi apna function.prototype hota hai, to functions ke bhi apne methods hote hn, jaise call, apply, bind etc. and ya bhi object.prototype ko point kar raha hai, to functions ke bhi object ke methods mil jate hn, jaise toString, hasOwnProperty etc.
console.log(Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype) // true






//Classes in JavaScript
const person ={
    name : "Check",
    age: 10,
    sayhello: function(){
        console.log(this.name);
    }
}
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayhello(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

// to create an object of the class
const person1 = new Person("Jawad", 22)
console.log(person1) // this will not print funciton 
console.log(person) // this will print function
console.log(person1.name)
person1.sayhello()

const person2 = new Person("Arshad", 42)
console.log(person2.name)
person2.sayhello()



// lets suppose we make banking app
// here wo use name , age from person class rather again make them separate.
class customer extends Person {
    constructor(name,age,accountNo,balance){
        super(name,age) // super ka use kar ke hum parent class ke constructor ko call kar sakte hain
        this.accountNo = accountNo;
        this.balance = balance;
    }
    checkBalance(){
        console.log("Your balance is " + this.balance);
    }
}
const customer1 = new customer("Ali", 30, 123456, 10000)
console.log(customer1.name) // this will print name from person class
customer1.sayhello() // this will print sayhello from person class
customer1.checkBalance() // this will print checkBalance from customer class