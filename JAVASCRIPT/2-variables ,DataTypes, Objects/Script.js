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
//     f. BigInt

let no = 2720984983798237492374398274892n; // BigInt (ye ek naya data type hai jo bohat bade numbers ko store kr sakta hai)
console.log(no)
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
console.log(n, o); // Ans = 20 10

// Premetive datatypes are immutable hai (Prove)
let str = "Jawad";
str[0] = "F"; // string immutable hai, isliye str[0] ko change nahi kar sakte
console.log(str)
str = "Fawad"; // string immutable hai, isliye str ko change nahi kar sakte, naya string create hota hai
console.log(str) // Ans = Fawad


//undefined
    let z = 3.6;
    const p = true;
    let user;   // undefined=jab koi variable bn jahe or is ma koi value store na ho
    //const p; // error aayega kyuki const variable ko bnate hi value deni hoti hai
    let q = undefined;  // undefined=jab koi variable bn jahe or is ma koi value store na ho
    console.log(q)
// null
//     null ka matlab:
// “Yahan koi value jaan bujh kar nahi hai”
// Matlab:
// Developer ne khud decide kiya
// “Abhi empty rakho”
 let r = null; // null ka matlab hota hai ki variable maine khali kr diya hai, ab is ma koi value nahi hai
    console.log(r)// Ans = null
    console.log(typeof(r))  // Ans = object (ye JS ka bug hai, ye null ko object type show krta hai)
//     👉 Yaad rakho:
// null object nahi hai
// Ye JS ka historical bug hai
    console.log(x, y, z, p, q, user , r);
    console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);




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



    let obj0 = {};
    console.log(obj0.name); //undefined(Object to bn gya hai lekin is ma koi value nahi hai)




   

    // Objects

    // JS ma object ka keys ko string ma convert kr deta hai chahe ap keys ko string ma likho ya number ma likho.

    // CRUD = Create, Read, Update, Delete
    // create object
    let obj ={
        name:"Jawad in obj" , 
        "job code":5600, 
        is_handsome:true,
        del: "kuch bhi"
    };
    // read object
    console.log(obj);
  console.log(obj["job code"]); // Ans = 5600 (kyuki job code me space hai isliye dot notation se access nahi kar sakte, bracket notation se access karna padega)
    console.log(obj.name); // (dot notation se access kar sakte hain)

    // update object
    obj.new_Entry = "New Value"; // new entry add kr di
    obj.name = "Changed Name"; // name change kr di
    console.log(obj);

    // delete object
    delete obj.del;
    console.log(obj);
                         // IMPORTANT
    // to get only keys of object
    console.log(Object.keys(obj))// make new array of keys of object
    // to get only values of object
    console.log(Object.values(obj))
    // to get both keys and values of object
    console.log(Object.entries(obj))


    // loops on Objcts 
    // for in loop (we use it less )
    for (let keys in obj){
        console.log(keys, obj[keys])
    }

        // Destructuring in Objects....mean extracting values from object and assign them to variables
        const {name,["job code"]:jobCode}  = obj;
        console.log(name, jobCode)


        // using for of loop on objects
        // for of loop works on iterable objects like arrays, strings, maps, sets etc. but it does not work on objects because objects are not iterable. so we cannot use for of loop directly on objects but we can use it on the array of keys or values of the object using Object.keys() or Object.values() method.
        for (let keys of Object.keys(obj)){
            console.log(keys)
        }  
        for (let values of Object.values(obj)){
            console.log(values)
        }  
        // for (let entries of Object.entries(obj)){
        //     console.log(entries)
        // }  
        for (let [keys,values] of Object.entries(obj)){
            console.log(keys, values)
        }  




        // we also make functions inside objects which are called methods
        let user = {
            name : "John",
            age : 30,
            greet: function(){
                console.log(`Hy from ${this.name}`) // this keyword refers to that object which is calling the method(here is user object).
                return 20
            }
        }
        let funcValue =user.greet()
        console.log(funcValue)
 
        let user2 = {
            name : "Jawad",
            age : 22
        }
        user2.greet  = user.greet; // we are assigning the greet method of user object to user2 object
        user2.greet() // Hy from Jawad because this.name refers to the name property of the object which is calling the method(here is user2 object).





                         // agr hm this ka keyword use na karn
        //  let user = {
        //     name : "John",
        //     age : 30,
        //     greet: function(){
        //         console.log(`Hy from ${user.name}`)
        //         return 20
        //     }
        // }
        // let funcValue =user.greet()
        // console.log(funcValue)

        //  let user2 = {
        //     name : "Dye",
        //     age : 30,
        //     }
        // user2.greet = user.greet;
        // user2.greet() // Hy from John because user.name refers to first object


        // we can also make object in object which is called nested object
        let student = {
            name : "Student",
            age: 19,
            gender: "male",
            address : {
                city: 'Jauharbad',
                streetNo: 5
            }
        }
        // console.log(student)
        // console.log(student.address)
        // console.log(student.address.city)

        // let student2 = student; // is sa student2 and student same object ko refer kr rahn hn.
        // console.log(student2)

        // but if want ka donon ki separate copy bane than we use separate operator and is ko Shallow copy bhi Kahte hn
        // let student2 = {...student} // ya ap ka nested objects ko alag copy nai banahe ga
        // student2.name = "nameChanged";
        // student2.address.city = "Lahore"
        // console.log(student)
        // console.log(student2)


        // To make complete separate copy of objects we use deep copy and is ke liye hum
        // structuredClone() method ka use karte hn
        let student2 =  structuredClone(student)
        student2.name = "nameChanged";
        student2.address.city = "Lahore"
        console.log(student)
        console.log(student2)


        // Limitations of a structured clone : It CANNOT clone:
// - Functions: It will throw a `DataCloneError`. Functions have a "scope" and are not considered simple data.
        const original = {
        name: "Alice",
  sayHi: function() { console.log("Hi"); }
};

let original2 = structuredClone(original)
console.log(original2)

// try {
//   const clone = structuredClone(original);
// } catch (error) {
//   console.error(error.name); // "DataCloneError"
//   console.error(error.message); // "() => { console.log("Hi"); } could not be cloned."
// }






// JS keys ko string ma convert kr deta hai chahe ap keys ko string ma likho ya number ma likho. After the update of 2025, now keys are also treat in symbols 

// Symbol ek primitive data type hai, bilkul string, number, boolean ki tarah — lekin unique hota hai.
// Its main Purpose:
// Object properties ko unique banana taa ke naam clash na ho.
// Symbol wali properties:
// for...in mein show nahi hoti
// Object.keys() mein nahi aati
// Hidden rehti hain (safe from accidental access)

const sym = Symbol("id")
const user3 = {
    name: "Bob",
    age: 25,
    0 : 100,
    4: 500,
    [sym]:"this is symbol"
}
console.log(user3[0])
console.log(user3[sym])
// Symbols basically used in making libraries and frameworks to create unique keys for objects to avoid name clashes.









    let obj2 = obj;
    obj2.name = "Changed Name";
    console.log(obj); // Ans = Changed Name (kyuki dono obj or obj2 same memory location ko point kar rahe hain)
    // asa khoun hota ha 
    // khoun ka real world example ma objects kafi data store krte hn(memory zaida use hoti ha) to hum uska reference pass krte hn jese uper obj2 ma kia ha

   




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








