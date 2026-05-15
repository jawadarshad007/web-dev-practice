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




// Coder Army 
// async function always returns a promise
 async function greet(){
    return "Hello World";
 }
 const responce = greet();
    // console.log(responce);
// best way to consume the promise is to use then method
responce.then((data) => {
    console.log(data);
})


// fetch("https://api.github.com/users")
// .then((responce)=>responce.json())
// .then((data)=>console.log(data))


// await keyword is used to wait for a promise to resolve. (dont use it outside of an async function because is sa JS wait kre ga next lines ko execute nai kre ga jis sa  app ka UI freeze ho skahta hai)
// always use await inside an async function
// here also event loop concept is applied.
async function gitbubUsers(){
    console.log("Hello g")
    try{
        const responce = await fetch("https://api.github.com/users");
        // idr ap ka server ap ko responce kr rha ha , promise resolve ho rha ha but ap ka data nhi aa rha ha.
        if(!responce.ok){
            throw new Error("Data not found");
        }
        const data = await responce.json();
        console.log(data)
    }
    catch(error){
        console.log(error)
    }
}
gitbubUsers();
console.log("I am separate task ...")









// Solve the problem of promise chaining with async await 


// Online Food Order System (Callback hell Exampe)
// here your each function is act as a API.
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
                if (Math.random()>0.1){

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











    //
    async function test(){

        // Ya tasks sab independent hain , inka ek dusre se koi lena dena nahi hai , to inko parallel me execute krna chahiye taki time save ho skae.
        // lakin yahn ap ne await use kiya ha to ye sequentially execute ho ga , pehla comment fetch hoga than photo than chat , is sa time zyada lage ga.
        const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
        const photos = await fetch("https://jsonplaceholder.typicode.com/photos");
        const chats = await fetch("https://jsonplaceholder.typicode.com/chats");



        // agar ap chahte hain ki ye tasks parallel me execute ho to apko inko promise.all me wrap krna hoga taki ye ek sath execute ho skae.
        const [comments , photos , chats] =  await Promise.all([fetch("https://jsonplaceholder.typicode.com/comments") , fetch("https://jsonplaceholder.typicode.com/photos") , fetch("https://jsonplaceholder.typicode.com/chats")])

    }