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



// Online Food Order System (Callback hell Exampe)

    let orderDetail = {
        orderId : 12345,
        food : ["Pizza", "Burger", "Coke"],
        cost : 500,
        customer_name: "Jawad",
        customer_location: "Township",
        restaurant_location: "Johar Town",
    }


    function placeOrder(orderDetail, callbackFunc){
        console.log(`${orderDetail.cost} Payment is in progress`)
        setTimeout(()=>{
            console.log("Payment is recieved and order gets placed")
            orderDetail.status = true;
            callbackFunc(orderDetail);
        
        },3000)
    }

    function prepareingOrder(orderDetail , callbackFunc){
        console.log(`Your food preparation started ${orderDetail.food}`)
        setTimeout(()=>{
            console.log("Your order is now prepared")
            orderDetail.token = 123;
            callbackFunc(orderDetail);
        },3000)
    }

    function pickupOrder(orderDetail , callbackFunc){
        console.log(`Delivery boy is on the way to pickup Order from ${orderDetail.restaurant_location}` )   

        setTimeout(()=>{
            console.log("I have picked up the Order")
            orderDetail.recieved = true;    
            callbackFunc(orderDetail);
        },3000)
    }

    function delieverOrder(orderDetail){
        console.log(`I am on the way to deliver the Order to ${orderDetail.customer_location}` )

        setTimeout(()=>{
            console.log("Order Deliever Successfully")
            orderDetail.delievery = true;
        },3000)
    }


// Callback hell
    placeOrder(orderDetail , (orderDetail)=>{
        prepareingOrder(orderDetail , (orderDetail)=>{
            pickupOrder(orderDetail , (orderDetail)=>{
                delieverOrder(orderDetail)
            })
        });
    });
// prepareingOrder()