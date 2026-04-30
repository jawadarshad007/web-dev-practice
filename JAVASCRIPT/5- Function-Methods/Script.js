// Important Qs is What is higher Order Function?
// Higher Order Function is that take funcitons as a parameter or  return function as a value 
// ForEach loop is Higher order function/Higher Order method
r=99  //, the variable is implicitly created as a global variable
console.log(typeof r)

// name is a parameter of the function username
function username(name){
    console.log("Hey " + name + " you are nice")
    console.log("Hey " + name + " you are Good")
    console.log("Hey " + name + " your Tshirt is  Good")
    console.log("Hey " + name + " your Course is  Good")
    return 10;
}
username("Jawad") // here Jawad is an argument of the function 
username("Arshad Mehmood")
console.log(username())  // note this it will return undefined because there is no return statement in the function
console.log(username()) // note this it will return 10 because there is a return statement in the function


sum1 (3 , 5) // note this it will work because of function hoisting.
function sum1(a , b) {
    console.log(a + b);
}
sum1 (3 , 5)


// c=3 tab kaam kre ga jab argument ma c ki value na bejhgi gahe ho
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


                    // IMPORTANT
// to control the number of arguments we can use rest operator
function addNum(...num){
        // app jitne arguments behjo ka , rest operator is ka array create kr deta ha 
        console.log(num)
        let sum =0;
        // for (let i=0; i<num.length; i++){
        //     sum = sum + num[i];
        // }
        // console.log(`Sum is ${sum}`)


        // array ka elements ko access ka better way for of loop ha
        for (let elements of num){
            sum = sum + elements
        }
      console.log(`Sum is ${sum}`)
}
addNum(1,2,3,4,)


//Rest operator wahn lgta ha jahn ap ka pass bth si indiviual values aa rhan hn , and ap  na inko catch krna ho
// Rest operator also used in destructing an array
const array = [10,20,30,40,50]
const [first,second,...num] = array;
console.log(first,second,num);

const array2 = [60,70,80,90,100];
console.log(array,array2)
// Spread operator direct ap ki array ko khol kr rakh deta ha   
console.log(...array,...array2)
// spread operator 
const array3 = [...array2,110,120]
console.log(array3)


// Another way to write the functions is function expression
// is ma difference ya ha ka ap is ko inilize sa pahle call nai kr skte ho
// console.log(sum2(4,5)) // its not work because sum is not defined yet
let sum2 = function(num1,num2){
    return num1+num2
}
console.log(sum2(4,5))


// Arrow Function
// this is compact(chota) way to write the functions 
let varname =(x)=>{
    console.log("Some code here...",x)
}
console.log(varname(9))


// if we single line code in the function then we can write it in a single line without using return keyword    
let addNumber = (num1,num2)=> num1+num2;
console.log(addNumber(3,4))


// if we have only one parameter in the function then we can write it without using parenthesis
let squareNum = num => num*num;
console.log(squareNum(9))

// let greet = () => {name:"Jawad",age:20} // itsgive error
// to handle object case in arrow function we have to wrap the object in parenthesis
let greet = () => ({name:"Jawad",age:20}) 
console.log(greet())

const func1 = (x) =>{
    console.log("I am a arrow function with value: ", x)
}
func1(12)
func1(99)
func1(66)


// IIFE (Immediately Invoked Function Expression) -- is function ko define krte hi call kr dete ha
(function IIFE() {
    console.log("hye I am IIFE, ma bnte sath hi call ho jata hn")
})();
(()=> console.log("hye I am IIFE, ma bnte sath hi call ho jata hn"))()



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




// Callback Function -- kiis function ko as a parameter pass krna callback function kehlata ha
function greet(){
    console.log("Hello gi")
}
function dance(){
    console.log("I am dancing")
}


function meet(callback){
    console.log("I am going to meet someone")
    // dance(); // asa hardcore nai krna
    callback(); // here we are calling the function that we have passed as a parameter
    // some code here.........
    console.log("Finished")
}
// console.log(greet)
meet(greet);
meet(dance);




// Callback example
function blinkItOrder(){
    console.log("We have start packing Ur food")
}

function orderPlaced(){
    console.log("We have start prepare Ur food")
}

function payment(amount,callback){
    console.log("Amount recieved")
    callback()

}
payment(500 , orderPlaced);
payment(500 , blinkItOrder);





















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