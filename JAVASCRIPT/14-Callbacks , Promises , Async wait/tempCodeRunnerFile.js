
    let orderDetail = {
        orderId : 12345,
        food : ["Pizza", "Burger", "Coke"],
        cost : 500,
        customer_name: "Jawad",
        customer_location: "Township",
        restaurant_location: "Johar Town",
    }


    function placeOrder(orderDetail){
        console.log(`${orderDetail.cost} Payment is in progress`)
        return new Promise((resolve , reject)=>{
             setTimeout(()=>{
                if (Math.random()>0.9){

                    console.log("Payment is recieved and order gets placed")
                    orderDetail.status = true;
                    resolve(orderDetail)
                }
                else{
                    reject("Payment is failed");
                }
        
        },3000)
        })
        
       
    }

    function prepareingOrder(orderDetail ){
        console.log(`Your food preparation started ${orderDetail.food}`)

        return new Promise((resolve , reject)=>{
             setTimeout(()=>{
                if (Math.random()>0.05){
                     console.log("Your order is now prepared")
                    orderDetail.token = 123;
                    resolve(orderDetail)
                }
                else{
                    reject("Food item is not present at restaurant")
                }
           
        },3000)
        })
       
    }

    function pickupOrder(orderDetail ){
        console.log(`Delivery boy is on the way to pickup Order from ${orderDetail.restaurant_location}` )   
        return new Promise((resolve , reject)=>{
             setTimeout(()=>{
                if(Math.random()>0.5){

                    console.log("I have picked up the Order")
                    orderDetail.recieved = true;    
                    resolve(orderDetail);
                }
                else{
                    reject("Delivery boy unable to reach restuarant")
                }
        },3000)
        })
       
    }

    function delieverOrder(orderDetail){
        console.log(`I am on the way to deliver the Order to ${orderDetail.customer_location}` )
        return new Promise((resolve , reject)=>{
              setTimeout(()=>{
            console.log("Order Deliever Successfully")
            orderDetail.delievery = true;
            resolve(orderDetail)
        },3000)
        })
      
    }



    async function  ordering() {
        try{

            const responce1 = await  placeOrder(orderDetail)
            const responce2 = await  prepareingOrder(responce1);
            const responce3 = await  pickupOrder(responce2);
            const responce4  = await  delieverOrder(responce3);
            
            console.log(responce4)
        }
        catch(error){
            console.log(error)
        }

    }
    ordering();
    console.log("Just checking ,,,timimg ")