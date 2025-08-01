

// Promises in JavaScript (used to avoid callback hell)
// it has three states: pending, resolved, and rejected
let promise =  new Promise((resolve , reject) =>{
        console.log("Promise is pending");
        // resolve("Promise is resolved");
        reject("Some error occurred ");

        
})
console.log(promise); // This will log the promise object

function getdata2(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Dataccc with id " + dataid + " is fetched");
            resolve("Promise is Successfully resolved");
        }, 6000);
    });
}
 console.log(getdata2(1))


// now we learn how to use promises 
const getpromise = () =>{
   return    new Promise((resolve , reject) => {
        console.log("I am a promise");
        resolve("Promise is resolved"); 
        // reject("Promise is rejected due to some error");
    })
};
let promise2 = getpromise();
// console.log(promise); // This will log the promise object
//if the promise is resolved, then we can use the then method to get the result
promise.then((result)=>{
    console.log("Promise is resolved successfully" , result);
})

// if the promise is rejected, then we can use the catch method to get the error
promise.catch((error) => {
    console.log("Promise is rejected with error: " + error);
})



// Promsies chaining
function asyncFunc1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Async function1 executed");
            resolve("Promsie1 Success");
        }, 4000);

    })
}
function asyncFunc2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Async function2 executed");
            resolve("Promsie2 Success");
        }, 4000);

    })
}

console.log("Fetching data1...");
// The first promise is executed and we wait for it to resolve
// Once it resolves, we can then call the second promise
asyncFunc1().then((result) => {
    console.log(result)
    console.log("Fetching data2...");
    
    asyncFunc2().then((res) => {
        console.log(res);
    })
})


//autual promise chain
function getdata3(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data with id " + dataid + " is fetched");
            resolve("Success");
        }, 2000);
    });
}

getdata3(1).then((res) => {
    // console.log(res)
    return getdata3(2);
})
.then(() => {
    return getdata3(3);
})
.then(() => {
    return getdata3(4);
})
.then((res) => {
    console.log(res);
})