// arrays are mutable
// Strings are immutable
// A mutable object can be changed after it's created, and an immutable object can't.
// loops -> iterable(strings,objects,arrays)
let arr = [1,2,3,4,5]
arr[0] = 999  // Changing value in array
console.log(arr , typeof arr)
console.log( "Lenght is:" + arr.length)
console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// for loop
let heros = ["SpiderMAn","Batman","SuperMan","Another","More"]
// console.log(heros.length);
// console.log(heros)
for (let index = 0; index < heros.length; index++) {
    console.log(heros[index]);  
}

//for of loop
for(let element of heros){
    // console.log(element)
    console.log(element.toUpperCase())
}

//pracrice qs find average of marks
let marks = [85, 97, 44, 37, 76, 66]
let sum = 0;
for (i=0; i<marks.length; i++){
    console.log(marks[i])
    //  sum = sum + marks[i]
     sum += marks[i]

}
console.log(`Sum is :${sum}`)
let average = sum / marks.length;
console.log(`Average is ${average}`)




// practice qs apply 10% off on given prices
// let prices = [250, 645, 300, 900, 50]
// let offer;
// for (let i = 0; i < prices.length; i++) {
//      offer = prices[i] * 0.10;
//     prices[i] = prices[i] - offer;
//     console.log(prices[i])
// }

// do with for of loop
let prices = [250, 645, 300, 900, 50]
let i2 = 0;
for (let val of prices) {
    console.log(`index ${i2} = ${val}`)
    offer = val * 0.10;
    val  = val - offer
    console.log("After 10% discount: ",val)
    i2++;
}

// another way of for-of loop
for (let val of prices) {
    console.log(`index ${i2} = ${val}`)
    offer = val * 0.10;
   prices[i2]  =prices[i2] - offer
    console.log(prices[i2])
    i2++;
}


// Methods in Arrays 
let foods = ["Rice","Apple","Carrot",]
console.log(foods)
// to add something in end of the array
// foods.push("nuts")
foods.push("nuts" , "Burger")
console.log(foods)
// to delete something in end of the array and it also return the deleted value
let deletedvalue = foods.pop();
console.log(foods)
console.log(`Deleted vlaue is ${deletedvalue}`)

// convert array to strings
console.log(foods)
console.log(foods.toString())
let numbers = [250, 645, 300, 900, 50]
console.log(numbers)
console.log(numbers.toString())


// to combine multi[ple arrays and return results
let foods2 = ["Rice","Apple","Carrot",]
let heros2 = ["SpiderMAn","Batman","SuperMan","Another","More"]
// let newz = foods.concat(heros);
let newz = heros2.concat(foods2, numbers);
console.log(newz);

// add to start
// let foods = ["Rice","Apple","Carrot",]
foods.unshift("number1")
console.log(foods)

// delete from start and return 
let foods3 = ["Rice","Apple","Carrot",]
console.log(foods3)
let a =  foods3.shift();
console.log(`Deleted: ${a}`)
console.log(foods3)


// return a piece of arrays
// let foods = ["Rice","Apple","Carrot",]
console.log(foods.slice(1,3)) //it gives 1 index to 2 index dont add the last index
console.log(foods.slice(1,)) //it gives 1 index to end index
console.log(foods.slice()) //it gives complete array


// change orginal array (add,replace,replace)
let s =  [1,2,3,4,5,6,7]
// splice(startindex,  delcount, newelements )
// s.splice(2, 2 , 101,102)
// console.log(s);

// add elements
// s.splice(2,0,999)
//  console.log(s);

// delete elements
// s.splice(5 , 1 )
// console.log(s);

// replace elements
s.splice(2, 1, 99)
console.log(s)


// practice questoins
let apps = [ "Google", "Youtube", "Facebook", "Whatsapp"]
let v = apps.shift();
console.log(v); //it gives return values
console.log(apps);
apps.splice(1 , 1, "Snapchat");
console.log(apps);
apps.splice(3 , 0 , "Amazon")
console.log(apps);