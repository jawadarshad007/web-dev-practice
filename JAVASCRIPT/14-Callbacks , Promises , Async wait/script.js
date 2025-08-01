// Asynchronous JavaScript using setTimeout
// function hello () {
//     console.log("Hello World");
// }
// setTimeout(hello , 2000); // This will call the hello function after 2 seconds


// // This is another way to use setTimeout with an anonymous function
// setTimeout(() => {
//     console.log("Hello World 2");
// }, 4000); // This will call the hello function after 2 seconds



// // Callbacks in JavaScript
// function sum (a , b){
//     console.log("The sum is " + (a + b));
// }
// function calculator (a , b , sumcallback){
//     console.log("Calculating the sum...");
//     sumcallback(a , b);
// }
// calculator(5, 10, sum); // This will call the sum function with the result of 5 + 10


// // Using an anonymous function as a callback
// function calculator (a , b , sumcallback){
//     console.log("Calculating the sum...");
//     sumcallback(a , b);
// }
// calculator(5, 10, (a,b) => {
//     console.log("The sum is " + (a + b));
// }); // This will call the sum function with the result of 5 + 10






//callback hell in JavaScript
// function getdata (dataid , callback){
//     setTimeout(() => {
//         console.log("Data with id " + dataid + " is fetched");
//         if (callback) {
//             callback();
//         }
//     } , 2000);
// }
// getdata(1 , () =>{
//     getdata(2 , () => {
//         getdata(3 , () => {
//             getdata(4 , () => {
//                 getdata(5 , () => {
//                     console.log("All data fetched successfully");
//                 });
//             });
//         }  )
//     })
// });



// Promises in JavaScript (used to avoid callback hell)
// it has three states: pending, resolved, and rejected
// let promise =  new Promise((resolve , reject) =>{
//         console.log("Promise is pending");
//         // resolve("Promise is resolved");
//         reject("Some error occurred ");

        
// })
// console.log(promise); // This will log the promise object

// function getdata2(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Dataccc with id " + dataid + " is fetched");
//             resolve("Promise is Successfully resolved");
//         }, 6000);
//     });
// }
//  console.log(getdata2(1))


// // now we learn how to use promises 
// const getpromise = () =>{
//    return    new Promise((resolve , reject) => {
//         console.log("I am a promise");
//         resolve("Promise is resolved"); 
//         // reject("Promise is rejected due to some error");
//     })
// };
// let promise = getpromise();
// // console.log(promise); // This will log the promise object
// //if the promise is resolved, then we can use the then method to get the result
// promise.then((result)=>{
//     console.log("Promise is resolved successfully" , result);
// })

// // if the promise is rejected, then we can use the catch method to get the error
// promise.catch((error) => {
//     console.log("Promise is rejected with error: " + error);
// })



// // Promsies chaining
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Async function1 executed");
//             resolve("Promsie1 Success");
//         }, 4000);

//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Async function2 executed");
//             resolve("Promsie2 Success");
//         }, 4000);

//     })
// }

// console.log("Fetching data1...");
// // The first promise is executed and we wait for it to resolve
// // Once it resolves, we can then call the second promise
// asyncFunc1().then((result) => {
//     console.log(result)
//     console.log("Fetching data2...");
    
//     asyncFunc2().then((res) => {
//         console.log(res);
//     })
// })


// //autual promise chain
// function getdata3(dataid){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data with id " + dataid + " is fetched");
//             resolve("Success");
//         }, 2000);
//     });
// }

// getdata3(1).then((res) => {
//     // console.log(res)
//     return getdata3(2);
// })
// .then(() => {
//     return getdata3(3);
// })
// .then(() => {
//     return getdata3(4);
// })
// .then((res) => {
//     console.log(res);
// })


// Async/Await in JavaScript
// await is used to wait for a promise to resolve
async function hello(){
    console.log("Hello World");
}
hello(); // This will call the hello function immediately


function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Weather data fetched");
            resolve(200);
        }, 2000);
    });
}
async function getWeatherData(){
    await api(); // This will wait for the api function to resolve
    await api(); // This will wait for the api function to resolve
}
getWeatherData(); // This will call the getWeatherData function

// pehla aik data aye than dosara aye 
function getdata3(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data with id " + dataid + " is fetched");
            resolve("Success");
        }, 2000);
    });
}

//  async function getAllDatawithIDs(){
//     console.log("Getting data 1....")
//     await getdata3(1);
//     console.log("Getting data 2....")
//     await getdata3(2);
//     console.log("Getting data 3....")
//     await getdata3(3);
//     console.log("Getting data 4....")
//     await getdata3(4);
// }
// getAllDatawithIDs()


//IIFE = Immediately Invoked Function Expression
// immediately invoked function expression
// syntax: (function(){})();
 (async function (){
    console.log("Getting data 1....")
    await getdata3(1);
    console.log("Getting data 2....")
    await getdata3(2);
    console.log("Getting data 3....")
    await getdata3(3);
    console.log("Getting data 4....")
    await getdata3(4);
})();