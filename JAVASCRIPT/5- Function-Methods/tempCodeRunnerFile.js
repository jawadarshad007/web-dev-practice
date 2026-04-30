const array = [10,20,30,40,50]
const [first,second,...num] = array;
console.log(first,second,num);

const array2 = [60,70,80,90,100];
console.log(array,array2)
// Spread operator direct ap ki array ko khol kr rakh deta ha   
console.log(...array,...array2)