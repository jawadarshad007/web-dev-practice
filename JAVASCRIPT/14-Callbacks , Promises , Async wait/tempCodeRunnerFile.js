
// Online Food Order System (Callback hell Exampe)

    let orderDetail = {
        orderId : 12345,
        food : ["Pizza", "Burger", "Coke"],
        cost : 500,
        customer_name: "Jawad",
        customer_location: "Lahore",
        restaurant_location: "Karachi"
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