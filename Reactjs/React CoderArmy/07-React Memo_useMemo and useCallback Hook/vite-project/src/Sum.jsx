
import React from 'react';

const Sum = React.memo(({number})=>{
    function calcSum(){
        let sum=0;
        for (let i=1; i<=number; i++){
            sum+=i;
        }
        return sum;
    }

    const total = calcSum()

  console.log("Check Sum render")

    return (
        <>
        <h1>This is our Math Library</h1>
        <h2>Sum: {total}</h2>
        </>
    )
})



// function Sum(){
//     function calcSum(){
//         let sum=0;
//         for (let i=1; i<=1000; i++){
//             sum+=i;
//         }
//         return sum;
//     }

//     const total = calcSum()

//   console.log("Check Sum render")

//     return (
//         <>
//         <h1>This is our Math Library</h1>
//         <h2>Sum: {total}</h2>
//         </>
//     )
// }

export default Sum;