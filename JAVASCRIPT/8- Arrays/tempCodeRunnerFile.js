let array =[-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSum = -Infinity;
for (let start=0; start<array.length; start++){
    let currSum=0;
    for (let end=start; end<array.length; end++ ){
        currSum += array[end];
        maxSum = Math.max(currSum,maxSum)
    }
}
console.log(`Maximum Subarray sum :${maxSum}`)