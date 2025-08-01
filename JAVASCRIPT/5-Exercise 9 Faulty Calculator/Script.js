let num1 = prompt("Enter number 1")
let num2 = prompt("Enter number 2")
console.log("Yours numbers are: "+ num1 + " and " + num2)
let press = prompt("Press 1 for addtion 2 for subtraction and 3 for multiplication and 4 for Divison")
let a = Math.random()
console.log(a)
if (a < 0.1)
{
    if (press == 1){
        let result= num1 - num2
        console.log("Addition is " + result);
    }
    else if (press == 2){
        let result= num1 * num2
        console.log("Subtraction is " + result);
    }
   
}
else{
    if (press == 1){
        let result= Number(num1) + Number(num2)
        console.log("Addition is " + result);
    }
    else if (press == 2){
        let result= num1 - num2
        console.log("Subtraction is " + result);
    }
}
