console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }
// For-In Loop
let emp = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
 
for (let keyPart in emp) {  
        console.log("Key:",keyPart ,"Value:",emp[keyPart])
        // const element = obj[keyPart];
        // console.log(keyPart , element);
}

//For-Of Loop
// let str="ApnaCollege";
// for (let i of str){
//     console.log("i = ",i);
// }


let str="ApnaCollege";
let size = 0;
for (let val of str){
    console.log("Value = ",val);
    size++;
}
console.log("Size of string: ",size);

// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }


//while loop
let i=1;
while(i<5){
    console.log(i)
    i++    
}

//Do while loop
// let i = 10;
// do {
//     console.log(i)
//     i++;
// } while (i<6);