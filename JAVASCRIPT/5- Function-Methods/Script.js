// Important Qs is What is higher Order Function?
// Higher Order Function is that take funcitons as a parameter or  return function as a value 
// ForEach loop is Higher order function/Higher Order method
r=99  //, the variable is implicitly created as a global variable
console.log(typeof r)


function username(name){
    console.log("Hey " + name + " you are nice")
    console.log("Hey " + name + " you are Good")
    console.log("Hey " + name + " your Tshirt is  Good")
    console.log("Hey " + name + " your Course is  Good")
}
username("Jawad")
username("Arshad Mehmood")

// console.log("Hey Jawad you are nice!")
// console.log("Hey Jawad you are good!")
// console.log("Hey Jawad your tshirt is nice!")
// console.log("Hey Jawad your course is good too!")

function sum1(a , b) {
    console.log(a + b);
}
sum1 (3 , 5)


function sum(a , b , c=3) {
    // console.log(a + b);
    return a + b + c;
    console.log("The function will execute after the return statement")  //note this
     
}
console.log("The sum of numbers are " + sum(2,3));
 result1 = sum (23 , 5)
 result2 = sum (4 , 9)
 result3 = sum (11 , 15 , 1)
console.log("The sum of numbers are " + result1);
console.log("The sum of numbers are " + result2);
console.log("The sum of numbers are " + result3);


// this is compact(chota) way to write the functions 
 varname =(x)=>{
    console.log("Some code here...",x)
}
console.log(varname(9))


const func1 = (x) =>{
    console.log("I am a arrow function with value: ", x)
}
func1(12)
func1(99)
func1(66)


// forEach Loop in Arrays
    new_array = [1,2,3,4,5]
    new_array.forEach((val) => {
        console.log(val," Square : ",val * val);
    });


    // another forEach qs
    cities = ["lahore", "Jauharabad", "Khushab"]
//    1st parameters is value , 2nd index and 3rd is itself array
     cities.forEach((val,idx, cities) => 
        {
        console.log(val.toUpperCase(),"At index",idx,cities);
    });


// Map (same as forEach loop but its return another array that store the results)

// Creates a new array with the results of some operation. The value its callback returns are
// used to form new array
let num =  [23,44,89]
let   neww = num.map((val) => {
    return val ** 2;   
})
console.log(neww)

// Filter --Creates a new array of elements that give true for a condition/filter.

let arr = [1,2,3,4,5,78,8,]
let evenArray = arr.filter((val) => {
    return val%2==0
})
console.log(evenArray)



// Reduce --- Performs some operations & reduces the array to a single value. It returns
// that single value

// let a = [1,2,3,4]
// let output =  a.reduce((initial,current) =>{
//     return initial + current
// })
// console.log(output)


let a = [1,22,32,4]
let output =  a.reduce((initial,current) =>{
    // if (initial > current)
    //     return initial
    // else
    //  return current
   return initial > current ? initial : current;
})
console.log(output)