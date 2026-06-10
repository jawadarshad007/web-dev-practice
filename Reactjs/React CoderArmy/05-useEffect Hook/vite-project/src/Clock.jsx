import { useEffect, useState } from "react";

function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());



    // yahn ma bth zaida re-rendering ho rahe ha , br br re-rendering hone pa setInterval ko webApis ko da dia jata ha.
//    setInterval(()=>{
//     setTime(new Date().toLocaleTimeString());
//     console.log("Checking")
//    },1000)


   // Solution is useEffect hook , jo ka setInterval ko webApi ko sirf aik hi dafa da ga
   useEffect(()=>{
    setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
    console.log("Checking")
   },1000)

   },[])
   
    return (
        <>
        <h1>Current Time: {time}</h1>
        </>
    )
}
export default Clock;