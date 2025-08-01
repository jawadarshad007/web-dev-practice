// Asynchronous JavaScript using setTimeout
function hello () {
    console.log("Hello World");
}
setTimeout(hello , 2000); // This will call the hello function after 2 seconds


// This is another way to use setTimeout with an anonymous function
setTimeout(() => {
    console.log("Hello World 2");
}, 4000); // This will call the hello function after 2 seconds



// Callbacks in JavaScript
function sum (a , b){
    console.log("The sum is " + (a + b));
}
function calculator (a , b , sumcallback){
    console.log("Calculating the sum...");
    sumcallback(a , b);
}
calculator(5, 10, sum); // This will call the sum function with the result of 5 + 10


// Using an anonymous function as a callback
function calculator (a , b , sumcallback){
    console.log("Calculating the sum...");
    sumcallback(a , b);
}
calculator(5, 10, (a,b) => {
    console.log("The sum is " + (a + b));
}); // This will call the sum function with the result of 5 + 10






// callback hell in JavaScript
function getdata (dataid , callback){
    setTimeout(() => {
        console.log("Data with id " + dataid + " is fetched");
        if (callback) {
            callback();
        }
    } , 2000);
}
getdata(1 , () =>{
    getdata(2 , () => {
        getdata(3 , () => {
            getdata(4 , () => {
                getdata(5 , () => {
                    console.log("All data fetched successfully");
                });
            });
        }  )
    })
});