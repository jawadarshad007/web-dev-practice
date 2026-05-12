

// Promises in JavaScript (used to avoid callback hell) 
// It is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// it has three states: pending, resolved, and rejected
// Promises ka use hm tab krte hn  jab do ya muliple functions aik dosare pr depend krte hn, aur hm chahte hn k agar pehla function successfully complete ho jaye to hi dosra function execute ho, otherwise error handle krna ho.
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







// COder army 

console.log("Start")

const info = fetch("https://api.github.com/users") 
// console.log(info) 
// Jab fullfiled ya reject ho
const info2 = info.then((responce)=>{
    // console.log(responce) // idr jo asal data ha wo bytes ki form ma body: ka andr aya ha   
    // Now i have to convert it in Readable form
    return responce.json() // JSON mean JavaScript Object Notation, ye ek format ha jisme data ko store kiya jata ha, aur ye human readable hota ha 
    // Ya JSON JS object sa different hota ha is ko ap ki sari programming language samajh sakti ha.
                           // Why we need Json
    // Because different programming language ma data ko exchange karne ke liye ek common format ki zarurat hoti ha, aur JSON us format ko provide karta ha, is se hum apne data ko easily exchange kar sakte ha different programming language ke beech ma.
})
info2.then((data)=>{
     console.log(data)
})
// .catch() method is used to handle the error if the promise is rejected
info2.catch((error)=>{
    console.log(error.message)
})


// TO write it in better way we make promise chaining
fetch("https://api.github.com/users")
.then((responce)=>{
    // Jab server responce to kare but actual(desire) data na daa
    if(!responce.ok){
        throw new Error("Something went wrong") // throw keyword is used to throw an error, and it will be caught by the catch block
    } 
    return responce.json() 
})
.then((data)=>{
    console.log(data)
    const parent = document.getElementById("first")
    for (let i=0; i<data.length; i++){
    const img = document.createElement("img")
    img.src = data[i].avatar_url;
    img.style.width = "100px"
    img.style.height = "100px"

    parent.append(img)
    }
})
.catch((error)=>{
     const parent = document.getElementById("first")
     parent.textContent = error.message;
})
console.log("End")
// Promise reject in 3 waja sa ho sakta ha(Jab Server koi responce da hi nai paya)
// 1. Your Internet down
// 2. Server down
// 3. DNS server down

// Agar URL wrong ho to promise ko fullfilled condition ma rakha jahe ga , because is ma Server na app ko responce kia ha with message "Not Found"


// JS object
const obj = {
    name: "John",
    age: 30,
    city: "New York",
    c:undefined // json ignore it because other languages dont know undefined
}
// Convert JS object to JSON
const jsonData = JSON.stringify(obj) // JSON.stringify() method converts a JavaScript object or value to a JSON string.
console.log(jsonData) 



// Actual JSON format(Basically it is a string format)
const jsonFormat = `{
    "name" : "Jawad",
    "age":22,
    "address":"lahore"
}`
console.log(jsonFormat)
//Convert JSON format to JS object 
const jsObject = JSON.parse(jsonFormat);
console.log(jsObject)





// Create Promises
const p1 = new Promise((resolve , reject)=>{
    resolve("Yeah!")
})
p1.then((message)=>{
    console.log(message)
})
p1.catch((erroe)=>{
    console.log(erroe)
})




// Solve the problem of callback hell with promises


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


// Callback hell
    // placeOrder(orderDetail , (orderDetail)=>{
    //     prepareingOrder(orderDetail , (orderDetail)=>{
    //         pickupOrder(orderDetail , (orderDetail)=>{
    //             delieverOrder(orderDetail)
    //         })
    //     });
    // });


    placeOrder(orderDetail)
    .then((orderDetail)=> prepareingOrder(orderDetail))
    .then((orderDetail)=>pickupOrder(orderDetail))
    .then((orderDetail)=> delieverOrder(orderDetail))
    .then((orderDetail)=>console.log(orderDetail))
    .catch((error)=>console.log("Error: ",error))
    .finally(()=>{
        console.log("I am doing cleanup work")
    })// chiaya Promise reject ho ya resolve ho, finally block hamesha execute hota ha, is ma hum apna cleanup code rakh sakte ha, jaise ki loading spinner ko hide karna, ya database connection ko close karna, etc.