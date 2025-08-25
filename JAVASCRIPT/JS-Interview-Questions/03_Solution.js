// Problem 03
// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.


const word = "Pakistan";
let reversed = "";
for (let i=word.length-1; i>=0; i--){
    reversed += word[i];
}
const mirroredWord = word +" "+ reversed;
console.log(mirroredWord);