// Problem 10
// The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.


function brewCoffee(type){
    return new Promise((resolve) =>{
        let delay = Math.floor(Math.random()*3000) + 1000;
        setTimeout(()=>{
           resolve(`Your ${type} is ready! (Brewed in ${delay} ms)`);
        },delay)
    })
}

brewCoffee("Cappuccino").then((mess) =>{
    console.log(mess)
})
brewCoffee("Latte").then((mess) =>{
    console.log(mess)
})