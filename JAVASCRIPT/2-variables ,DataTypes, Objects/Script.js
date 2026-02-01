console.log("Hello World 2");
let a = 5;
let b = 5;
let c = "Jawad";
console.log(a + b);
{
  let a = 66; // let is block scope
  console.log(a);
}
console.log(a);
// to know what type of datatype of variable we use typeof
console.log(typeof a, typeof b, typeof c);

// Data Types in JS
// 1. Primitive Data Types
//     a. Number 
//     b. String
//     c. Boolean
//     d. Undefined
//     e. Null


// PRIMITIVE DATA TYPES are immutable (yaani jo value assign kar di wo change nahi ho sakti)  is ka mtlb below ha:
let m = 10;
// Memory me 10 create hua
// m us value ko point kar raha hai
m = 20;
// 10 change nahi hota ❌
// Memory me naya 20 create hota hai ✅
// m ab 20 ko point karta hai
// 👉 10 waisa hi rehta hai, koi usko modify nahi karta

// to prove this:
let n = 10;
let o = n; // o me 10 copy ho gya
n = 20; // o ki value change ho gyi
// n ki value change nahi hogi
console.log(n, o); // Ans = 10 20


// 2. Non-Primitive Data Types (sab ka type object hota hai and ye mutable hote hain)
//     a. Objects
//     b. Arrays
//     c. Functions





    let x = "Jawad Bhai";
    let y = 22;
//     1 Bit  = 0 ya 1
// 1 Byte = 8 Bits
// 8 Byte = 64 Bits
// JS Number = 8 Byte = 64 Bit
// Bit <→ Byte <→ KB <→ MB <→ GB <→ TB


    let z = 3.6;
    const p = true;
    let user;   // undefined=jab koi variable bn jahe or is ma koi value store na ho
    //const p; // error aayega kyuki const variable ko bnate hi value deni hoti hai
    let q = undefined;  // undefined=jab koi variable bn jahe or is ma koi value store na ho

    let obj0 = {};
    console.log(obj0.name); //undefined(Object to bn gya hai lekin is ma koi value nahi hai)


//     null ka matlab:
// “Yahan koi value jaan bujh kar nahi hai”
// Matlab:
// Developer ne khud decide kiya
// “Abhi empty rakho”

    let r = null; // null ka matlab hota hai ki variable maine khali kr diya hai, ab is ma koi value nahi hai
    console.log(typeof(r))  // Ans = object (ye JS ka bug hai, ye null ko object type show krta hai)
//     👉 Yaad rakho:
// null object nahi hai
// Ye JS ka historical bug hai
    console.log(x, y, z, p, q, user , r);
    console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

    // Objects
    let obj ={
        name:"Jawad in obj" , 
        "job code":5600, 
        "is_handsome":true
    };
  
    let obj2 = obj;
    obj2.name = "Changed Name";
    console.log(obj.name); // Ans = Changed Name (kyuki dono obj or obj2 same memory location ko point kar rahe hain)
    // asa khoun hota ha 
    // khoun ka real world example ma objects kafi data store krte hn(memory zaida use hoti ha) to hum uska reference pass krte hn jese uper obj2 ma kia ha

    console.log(obj);
    obj.salary = "1 Crore"
    console.log(obj);
    obj.salary = "5 Crore"
    console.log(obj);


    //practice qs
    const profile = {
        username: "Shradha" ,
        posts: 156, 
        isfollow: true,
        bio: "kuch bhi"
    };
    console.log(Object.keys(profile)) //just keys
    console.log(Object.values(profile)) // just values
    console.log(Object.entries(profile)) //print both
    console.log(profile);
    console.log(typeof profile["username"]);
    profile.posts = 160;
    console.log(profile);
    profile.dp= true;
    console.log(profile);
    console.log(typeof profile["dp"]);


let jump = "kudna";
let eating = "kana";
let sleep = "Sona";
console.log("Jump meaning is:",jump)
console.log("Eating meaning is:",eating)
console.log("waaaa")
console.log("geo")

console.log("Sleep meaning is:",sleep)