function greet(){
    console.log("Hello gi")
}
function dance(){
    console.log("I am dancing")
}


function meet(callback){
    console.log("I am going to meet someone")
    // dance(); // asa hardcore nai krna
    callback(); // here we are calling the function that we have passed as a parameter
    // some code here.........
    console.log("Finished")
}
// console.log(greet)

meet(greet);
meet(dance);