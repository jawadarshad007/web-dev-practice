// Linear Search 
function linearSearch(arr, target) {
  // Loop through every element in the array sequentially
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target, return its index
    if (arr[i] === target) {
      return i;
    }
  }
  // Return -1 if the target is not found in the entire array
  return -1;
}
const numbers = [10, 50, 30, 70, 80, 20];
let index = linearSearch(numbers, 70)
console.log(`Element found at index: ${index}`) // Output: 3
console.log(linearSearch(numbers, 99)); // Output: -1
// TIme complexity of Linear Search is O(n)


// Element find at given index
function findElementAtIndex(arr, index) {
    if (index>=0 && index<arr.length){
        return arr[index]
    }
    else {
        console.log("Invalid INdex")
    }

}
const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(findElementAtIndex(fruits, 0));










// smallest no
let arr = [12,5,6,23,89,-65,9];
let smallest = arr[0];
for (let i =0; i<arr.length; i++){
    if (arr[i] < smallest){
        smallest = arr[i]
    }
}
console.log(`Smallest number ${smallest} `)



//reverse oringinal array

let array = [2,4,65,9,12,87,90]
let ending = array.length-1;
for (i=0; i<array.length/2; i++){
    let c = array[i]
    array[i] = array[ending]
    array[ending] = c
    ending--;
}
console.log(`Reversed array is ${array}`)


// Print all unique values in an array 
let arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5]
let unique = []

for (let i=0; i<arr.length; i++){
    let count = 0;
    for (let j=0; j<arr.length; j++){
        if (arr[i] == arr[j] ){
            count++;
        }
        
    }
    if (count==1 ){
        unique.push(arr[i])
    }
}
console.log(unique)








// Reverse an array
let arr = [1, 2, 3, 4, 5];
let start = 0 , end = arr.length-1;

while(start < end ){
    [arr[start] , arr[end]] = [arr[end] , arr[start]]

    start++;
    end--;
}

console.log(arr)










