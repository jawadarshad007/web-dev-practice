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

//Arrays bhi JS ma key value pair ma store hoti hain but unka key index hota hai jo ke 0 se start hota hai aur unka value us index par jo bhi value store hai wo hota hai. 


// Heterogeneous Data Types in JavaScript Arrays  means that an array can contain elements of different data types. For example, you can have an array that contains numbers, strings, booleans, objects, and even other arrays. 
//  Here's an example:
let heterogeneousArray = [42, "Hello", true, { name: "Alice" }, [1, 2, 3]];
console.log(heterogeneousArray);

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


let array = [1,2,3,4,5]
let array2 =  array; // it is not creating a new array it is just creating a reference to the original array
array2.push(999) 
console.log(array) // it will change the original array because both array and array2 are pointing to the same array in memory


const arr3 = [1,2,3,4,5]
arr3 = [1,2,3,4,5,6] // it will give error because we cannot reassign a new array to a constant variable
arr3.push(999) // it will work because we are not reassigning a new array to the constant variable, we are just changing the contents of the array which is allowed in case of arrays declared with const
console.log(arr3)

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
// another way to convert array to string is by using join method here we can specify the separator between the elements of the array in the resulting string
console.log(foods.join(" - "))
console.log(numbers.join(" | "))

// to combine multi[ple arrays and return results
let foods2 = ["Rice","Apple","Carrot",]
let heros2 = ["SpiderMAn","Batman","SuperMan","Another","More"]
// let newz = foods.concat(heros);
let newz = heros2.concat(foods2, numbers);
console.log(newz);
// we also achive this by using spread operator
let newz2 = [...heros2, ...foods2, ...numbers]
console.log(newz2)
console.log(...heros2, ...foods2, ...numbers) // it will print all the elements of the arrays without creating a new array



// add elemrnt at starting of the array
let foodss = ["Rice","Apple","Carrot",]
foodss.unshift("number1")
console.log(foodss)

// delete from start and return 
let foods3 = ["Rice","Apple","Carrot",]
console.log(foods3)
let a =  foods3.shift();
console.log(`Deleted: ${a}`)
console.log(foods3)

// it is advised to not use shift and unshift because it is costly in terms of time complexity as it has to reindex the whole array after adding or deleting an element at the start of the array. 

// return a piece of arrays
// let foods = ["Rice","Apple","Carrot",]
// slice it does not change the original array 
console.log(foods.slice(1,3)) //it gives 1 index to 2 index dont add the last index
console.log(foods.slice(1,)) //it gives 1 index to end index
console.log(foods.slice()) //it gives complete array


// change orginal array (add,replace,replace)
let s =  [1,2,3,4,5,6,7]
// splice(startindex,  delcount, newelements )
let trimPart = s.splice(1,4) 
console.log(`Trim part is ${trimPart}`) // it will delete 4 elements from index 1 and return the deleted elements and change the original array   
console.log(s)
s.splice(2, 2 , 101,102)
console.log(s);
// 🎯 Conceptual Difference (Exam / Interview line)
// slice = copy without touching original
// splice = surgery on original array

// add elements
// s.splice(2,0,999)
//  console.log(s);

// delete elements
// s.splice(5 , 1 )
// console.log(s);

// replace elements
s.splice(2, 1, 99)
console.log(s)


// Search in array
let arr4 = [1,2,3,4,5,6,3,7]
console.log(arr4.indexOf(3)) // it will return the index of the first occurrence of the element in the array if it is present otherwise it will return -1
console.log(arr4.lastIndexOf(3))// it will return the index of the last occurrence of the element in the array if it is present otherwise it will return -1
console.log(arr4.indexOf(10)) // it will return -1 because 10 is not present in the array
console.log(arr4.includes(5)) // it will return true because 5 is present in the array
console.log(arr4.includes(10)) // it will return false because 10 is not present in the array




// Sorting in array
let sorting = ["ali","Jawad", "Ali", "Zain", "Ahmed", "Sara"]
console.log(sorting.sort())// it will sort the array in alphabetical order and it is case sensitive so capital letters will come before small letters due to in ASCII table capital letters have lower ASCII values than small letters
console.log(sorting)// it will change the original array because sort method changes the original array

console.log(sorting.reverse()) // it will reverse the array and it also changes the original array

let numm = [101, 90, 80, 32, 13]
console.log(numm.sort()) // it will sort the array in ascending order but it is not working as expected because sort method converts the numbers to strings and then compares them based on their Unicode values so it is sorting them as strings rather than numbers
// ya JS ma is lia ha khoun ka array ma multiple types of data ho sakta ha to sort method ko pata nahi hota ke array ma numbers hain ya strings hain is lia wo unko strings ki tarah sort karta ha
let mix = [10,"Zohaib",true]
mix.sort();
console.log(mix) 
// assending order
console.log(numm.sort((a,b)=>a-b)) // it will sort the array in ascending order because we are providing a compare function to sort method which tells it how to sort the numbers. In this case, we are returning a-b which means that if a is less than b, it will return a negative value and a will come before b in the sorted array. If a is greater than b, it will return a positive value and a will come after b in the sorted array. If a is equal to b, it will return 0 and their order will remain unchanged in the sorted array.
// descending order
console.log(numm.sort((a,b)=>b-a))




// flat array 
let arr5 = [1,2,3,[4,5,[999,777],6],7,8,[9,10]]
console.log(arr5[3][2][1])
console.log(arr5.flat(2)) // it will flatten the array up to 2 levels deep 
console.log(arr5)// it will not change original array 
console.log(arr5.flat(Infinity)) // in case you don't know how many levels of nesting are there in the array you can use Infinity to flatten the array completely regardless of the number of levels of nesting




// Arrays are object in JS
let arr = [10, 20, 30,88,90];
arr.name = "Coder";
console.log(arr);



// Destructing in Arrays
let [first, second] = arr; // it will assign the first element of the array to the variable first and the second element of the array to the variable second
console.log(first, second)








// practice questoins
let apps = [ "Google", "Youtube", "Facebook", "Whatsapp"]
let v = apps.shift();
console.log(v); //it gives return values
console.log(apps);
apps.splice(1 , 1, "Snapchat");
console.log(apps);
apps.splice(3 , 0 , "Amazon")
console.log(apps);










const string = "Hello, World!";
string[0] = "h"; // This will not change the string
console.log(string); // Output: "Hello, World!" (unchanged) 