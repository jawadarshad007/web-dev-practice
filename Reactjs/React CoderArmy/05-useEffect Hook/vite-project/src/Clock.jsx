import { useEffect, useState } from "react";

function Clock(){
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [checkButton, setCheckButton] = useState(true)



    // yahn ma bth zaida re-rendering ho rahe ha , br br re-rendering hone pa setInterval ko webApis ko da dia jata ha.
//    setInterval(()=>{
//     setTime(new Date().toLocaleTimeString());
//     console.log("Checking")
//    },1000)


   // Solution is useEffect hook , jo ka setInterval ko webApi ko sirf aik hi dafa da ga
   useEffect(()=>{

    if (!checkButton)
         return; // agar checkButton false hai to useEffect ko run nahi karna hai.

    const intervalId =  setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
    console.log("Checking")
   },1000)

// ya return checkButton change hone sa pahle run hoga.
   return ()=>{
    clearInterval(intervalId);
   }

   },[checkButton]) // jab bhi checkButton change hoga tabhi useEffect run hoga.
   
    return (
        <>
        <button onClick={()=>setCheckButton(!checkButton)}>{checkButton? "Hide": "Show"}</button>
        {
            checkButton && <h1>Current Time: {time}</h1>
        }
        
        </>
    )
}
export default Clock;