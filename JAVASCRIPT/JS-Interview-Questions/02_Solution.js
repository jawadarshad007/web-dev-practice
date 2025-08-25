// problem 02 
// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

const numbers = [2, 2, 5, 7, 7, 7, 10, 12, 12, 15];
console.log("Original Array:");
console.log(numbers);
console.log("Modified Array:");
let result = [];
for (let i=0; i<numbers.length; i++){
    if (numbers[i] === numbers[i+1] ){
        result.push(numbers[i])
        continue;
    } 
    result.push(numbers[i] * 2);
}
console.log(result);













