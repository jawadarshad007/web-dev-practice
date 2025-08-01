const stumarks = {
    Jawad: 99 , 
    Kamail: 89 ,
    Irfan: 77,
    Tayyab: 82
};
for (let i = 1; i <= 5; i++) {
    console.log(stumarks);
    
    
}
for (const key in stumarks) {
    console.log(key ,   stumarks[key])
        
    }

// q4
    // let num = 45
    // let usernum = prompt("Enter a number to know weather its corerct or not!")
    // if (usernum == num){
    //     console.log("Congrats! its matched")
    // }
    // else{
    //     console.log("Try again!")
    // }
//  q5
function calculatemean(a , b ,c) {
    let addition =  a + b + c
    return addition/3
}
let result= calculatemean(1,2,3)
console.log("The mean of numbers are " + result)



 let count = 0;
 function chkvowel(name ){
    console.log(name)
    for(i=0; i<name.length; i++){
        if (name[i]== "a" || name[i]== "e" ||name[i]== "i" || name[i]== "o" || name[i]== "u")
        { 
            count++;
        }
    }
    return count;
}
let print= (chkvowel("Hellouqwera"))
console.log(`No of vowels in it : ${print}`)

// forEach Loop in Arrays
new_array = [1,2,3,4,5]
new_array.forEach((val) => {
    console.log(val," Square : ",val * val);
});


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.Use the reduce method to calculate sum of all numbers in the array
// let num = Number(prompt("ENter any number : "))
let num = 10;
let newarray = [];
for ( i= 1; i<= num; i++ ){
    newarray[i-1] = i
}
console.log(newarray)
let sum = newarray.reduce((initial , reduce) =>{
    return initial + reduce
})
console.log("Sum is : ",sum)