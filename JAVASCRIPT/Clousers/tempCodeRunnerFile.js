function outer(value){ // here outer function in high order function
    
    return function inner(num){
        console.log("I am inner function")
        return num*value;
    }

}
// const functionHolder = outer(4);
// console.log(functionHolder(5)) 

const functionHolder = outer(4)(5)
console.log(functionHolder)