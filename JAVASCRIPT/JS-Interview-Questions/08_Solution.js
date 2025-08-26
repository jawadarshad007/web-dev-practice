//  // Problem 08
// // Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
function multiplyByTwoAfterDelay(number) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            const result = number * 2;
            resolve(result);
        }, 500);
    });
}

async function asyncArrayMapping(numbers) {
    
    const promises = [];
    
    for (let i = 0; i < numbers.length; i++) {
        const promise = multiplyByTwoAfterDelay(numbers[i]);
        promises.push(promise);
    }
    return promises;
}


async function testFunction() {
    const inputNumbers = [1, 2, 3, 4, 5];
    const promiseArray = await asyncArrayMapping(inputNumbers);
    console.log("Array of promises:", promiseArray);
    
    
    const results = await Promise.all(promiseArray);
    console.log("Final results after 500ms delay:", results);
}
testFunction();





