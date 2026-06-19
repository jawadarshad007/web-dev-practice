import React from "react";




// function Homework({justPass}) {
//     justPass()
//     return (
//         <>
//         <h2>Hello, I am Homework component</h2>

//         </>
//     )
// }


const Homework = React.memo(({justPass})=>{
     justPass()
    return (
        <>
        <h2>Hello, I am Homework component</h2>

        </>
    )
})

export default Homework;