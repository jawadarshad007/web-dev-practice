function outer(value){ // here outer function in high order function
    return function inner(num){
        console.log("I am inner function")
        console.log(num*value)
    }

}

const functionHolder = outer(4);
functionHolder(5)