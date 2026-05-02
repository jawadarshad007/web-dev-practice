// forEach / map / filter / reduce


// forEach() .....takes a callback function and executes it for each element in the array. It does not return a new array.
let array = [10, 20, 30, 40, 50]
let sum = 0;
array.forEach((element,index,array)=>{
    sum+=element;
    console.log(element,index,array)
})
console.log(`Sum is ${sum}`)















// map 
let arr= [1, 11, 5, 9]
// let newarr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)

// another efficent method
let newarr = arr.map((elee, index, arrays)=>{
    return elee**2
    
})
console.log(newarr)




let a = [1,2,3]
// let newa = a.map( (el,index,arr)=>{
//     return el*el
// } )
// console.log(newa)

// make your own customize map function
a.maping = function(callbackFunc){
    let ans = [];
    for (let num of a){

       const returnData = callbackFunc(num)
       ans.push(returnData)

    }
    return ans;
}
const newa = a.maping((element)=> element * element)
console.log(newa)




// filters...
// takes a callback function and returns a new array with all the elements that pass the test implemented by the callback function.
let arr2 = [10, 20, 30, 40, 50, 60, 70]
// let newarr2 = arr2.filter((element)=> element>45)
// console.log(newarr2)

// make your own customize filter function 
// arr2.filtering= function {} ..... only works with arr2 array 
// agr hm chahte hai ki ye function kisi bhi array ke sath work kare to hume usse array ke prototype me add karna padega taki wo sare arrays ke sath work kare
Array.prototype.filtering = function(callbackFunc){
    let ans = [];
    for(let num of this){
           if (callbackFunc(num)){
            ans.push(num)
    }   
    }
    return ans;
}
// let newarr2 = arr2.filtering((element)=> element>45)
// console.log(newarr2)

let checkarr = [1,2,3,4,5,6,7,8,9,22]
let arr3 = checkarr.filtering((elment)=> elment%2==0 )
console.log(arr3)




let numm = [101, 90, 80, 32, 13]
// assending order
// console.log(numm.sort((a,b)=>a-b))

// try to make your own customize sort function but fail below sorting function is not working properly.
numm.sorting = function(callbackFunc){
    let ans = [];
    let i=0
    for (let element of numm){
        // console.log(element)
        let next = numm[i+1];
         if (callbackFunc(element , next)){
            ans.unshift(next)
         }
         i++;
         
    }
    return ans;
   
   
}

let newnumm = numm.sorting((a,b)=> a-b)
console.log(newnumm)


//  function greaterthanSeven(ele) {
//     if (ele>50){
//         return true;      
//     }
//     return false;
// }
//  another way to define function
// const greaterthanSeven = (ele) =>{
//     if (ele>50){
//         return true;      
//     }
//     return false;
// }
// console.log(newarr.filter(greaterthanSeven))
// yaa
console.log(newarr.filter((ele) =>
    {
    if (ele>50){
        return true;      
    }
    return false;
}
))









//  reduce = reduces an array to a single value

// array.reduce((accumulator, currentValue) => {
//     // logic
// }, initialValueOfAccumulator)

let qqq = [2,3,33,4,22,3]
const total = qqq.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
},0)
console.log(total)

let xyz = [1,2,3,4,5,6]
const chkreduce = (a, b)=>{
    return a*b;
}
console.log(xyz.reduce(chkreduce))

















// real world data , to practice map, filter and reduce functions
const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const newProduct = products.filter((product)=> product.price < 100) // filtering products with price less than 100
// const newProduct = products.filter((product)=> product.price < 100).sort((a,b)=> b.price-a.price)
// console.log(newProduct) // filtering products with price less than 100 and sorting them in descending order of price

const newMap = products.map((product)=> ({name:product.name , price:product.price}))
console.log(newMap) 

const newProduct = products.filter((product)=> product.price < 100).sort((a,b)=> b.price-a.price).map((product)=> ({name:product.name , price:product.price})) // filtering products with price less than 100 and sorting them in descending order of price and then mapping them to an array of objects with only name and price properties
console.log(newProduct)


const totalPrice = products.reduce((accumulator, currValue)=> {
    if (currValue.inStock){
        return accumulator + currValue.price;
    }
    else{
        return accumulator
    }
},0)
console.log(totalPrice)












// Data Structure: Set 
// Set is a collection of unique values. It does not allow duplicate values and does not maintain any order of elements. It provides methods to add, delete, and check for the presence of elements in the set.


let duplicate =  [10,20,33,10,22,20,90]
const set1 = new Set(duplicate)
console.log(set1)
// to add value in set
set1.add(99)
console.log(set1)
console.log(set1.has(33))  // to check if a value is present in the set
set1.delete(22) // to delete a value from the set
console.log(set1)
console.log(set1.size) // to get the size of the set
set1.clear() // to clear the set
console.log(set1)


let email  = ["mo@gm" , "ra@gm", "rt@gm", "mo@gm"]
let uniqueEmail =  new Set(email)
// to iterate over set
for (let num of uniqueEmail){
    console.log(num)
}
console.log(uniqueEmail)
// to convert set to array using spread operator
console.log([...uniqueEmail])
// another way
uniqueEmail = [...new Set(email)]
console.log(uniqueEmail)