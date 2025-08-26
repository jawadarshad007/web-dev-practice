// Problem 06 
// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


let str = "Hello World, This is a Vowel Counter Test";
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
let count = 0;
for (let char of str) {
    if (vowels.includes(char)){
        count++;
    }
}  
console.log("Number of vowels in the given string is: " + count);