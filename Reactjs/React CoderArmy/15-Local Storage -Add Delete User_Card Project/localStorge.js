// 1. What is Local Storage?
// Local Storage is a browser feature that allows you to store data on a user's computer, even after the browser is closed or the page is refreshed.
// ya Broswer ka kud ki Storage hoti ha almost 5 to 10 mb(depending on the Domain).



// For example, suppose you're building a React Todo App. When you add a todo and refresh the page, the todo normally disappears if you haven't saved it anywhere. Using Local Storage, you can keep that todo saved in the browser.
// or save user Credentials , theme info etc




// You can also clear all Local Storage entries for the current website:
// localStorage.clear();



// setItem("key" , "value") — To add new data or overwrite existing one 
localStorage.setItem("name" ,  "Jawad")
localStorage.setItem("age" ,  "23")
localStorage.setItem("city" ,  "Lahore")
// This stores the value "Jawad" under the key "name".



// getItem("key") — Get saved data
const data = localStorage.getItem("city")
console.log(data);



// localStorage.clear()


// removeItem("key") — Delete specific data
localStorage.removeItem("age")



// issues with localStorage 
let arr = [10,20,20]
localStorage.setItem("arrayData" , arr) // localStorage is data ko string ma save kre ga

console.log(localStorage.getItem("arrayData")); // hala ap na data array form ma save kia but ya ap ko data string me daa ga.


//2nd issue
let obj ={
    email: "hello@gmail.com",
    password: "12345"
}
// localStorage.setItem("object" , obj)
// console.log(localStorage.getItem("object")); // output : [object Object]
// pahle ap ko object ko axhi trah localStorage ma save krwana parhe ga, pahle ap ko object ko string ma convert krna parhe ga

// Solution
// convert object/array to string 
let newObj = JSON.stringify(obj)
localStorage.setItem("object" , newObj)
// console.log(localStorage.getItem("object")); // output : {"email":"hello@gmail.com","password":"12345"}

// to convert back string to object/array       
const objData = localStorage.getItem("object")
console.log(JSON.parse(objData))







