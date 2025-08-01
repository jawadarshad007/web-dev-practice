let arr=[];
for (let i = 1; i <= num; i++) {
    // const element = array[index];
              arr.push(i)       
}
console.log(arr)
const red =(a,b)=>{
    return a * b;
}
console.log(arr.reduce(red))