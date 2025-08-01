//  map / filter / reduce
let arr= [1, 11, 5, 9]
// let newarr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }
// console.log(newarr)

// another efficent method
let newarr = arr.map((elee, index, arrays)=>{
    return elee**2
    
})
console.log(newarr)

let a = [1,2,3]
let newa = a.map( (el,index,arr)=>{
    return el*el
} )
console.log(newa)

// filters
//  function greaterthanSeven(ele) {
//     if (ele>50){
//         return true;      
//     }
//     return false;
// }
//  another way to define function
// const greaterthanSeven = (ele) =>{
//     if (ele>50){
//         return true;      
//     }
//     return false;
// }
// console.log(newarr.filter(greaterthanSeven))
// yaa
console.log(newarr.filter((ele) =>
    {
    if (ele>50){
        return true;      
    }
    return false;
}
))

//  reduce = reduces an array to a single value
let xyz = [1,2,3,4,5,6]
const chkreduce = (a, b)=>{
    return a*b;
}
console.log(xyz.reduce(chkreduce))
