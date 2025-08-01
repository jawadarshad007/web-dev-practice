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