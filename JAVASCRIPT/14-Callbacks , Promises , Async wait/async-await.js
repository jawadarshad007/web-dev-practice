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