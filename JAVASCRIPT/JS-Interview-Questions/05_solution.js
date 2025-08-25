// Problem 05
// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.


let arr = [2,4,6,8,4,-3,5,9]
let sum=0;

for (let i=0; i<arr.length; i++)
{

    if (arr[i]<0) {
        break;
    }
    else{
        sum += arr[i];
    }
}
console.log(sum);