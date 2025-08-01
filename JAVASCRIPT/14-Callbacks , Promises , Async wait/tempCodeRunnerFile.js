function getdata3(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data with id " + dataid + " is fetched");
            resolve("Success");
        }, 2000);
    });
}

//  async function getAllDatawithIDs(){
//     console.log("Getting data 1....")
//     await getdata3(1);
//     console.log("Getting data 2....")
//     await getdata3(2);
//     console.log("Getting data 3....")
//     await getdata3(3);
//     console.log("Getting data 4....")
//     await getdata3(4);
// }
// getAllDatawithIDs()


//IIFE = Immediately Invoked Function Expression
// immediately invoked function expression
// syntax: (function(){})();
 (async function (){
    console.log("Getting data 1....")
    await getdata3(1);
    console.log("Getting data 2....")
    await getdata3(2);
    console.log("Getting data 3....")
    await getdata3(3);
    console.log("Getting data 4....")
    await getdata3(4);
})();