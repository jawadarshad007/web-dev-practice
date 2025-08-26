// Problem 09
// The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.


function placeOrder(item){
   return new Promise((resolve)=>{
    let delay = Math.floor(Math.random()*3000)+1000;
    setTimeout( ()=>{
        resolve(`Order placed: ${item}. It took ${delay} ms.`)
    } ,delay)
   }) 
}
placeOrder("laptop").then((mess) =>{
    console.log(mess);
})


