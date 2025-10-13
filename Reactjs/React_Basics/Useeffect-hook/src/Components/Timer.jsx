import React, { useEffect , useState } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(true)
    // useEffect(()=>{
    //     const intervald =setInterval(()=>{
    //         console.log("setInterval executed")
    //         setSeconds((preValue)=>preValue+1)
    //     },1000  ) 

    //     return  ()=>{
    //         console.log("Time to stop")
    //             clearInterval(intervald)
    //     }
    // },[])
    useEffect(()=>{
        let intervald;
      if (running){
           intervald =setInterval(()=>{
            console.log("setInterval executed")
            setSeconds((preValue)=>preValue+1)
        },100  )
      } 

        return  ()=>{
            console.log("Time to stop")
                clearInterval(intervald)
        }
    },[running])
  return (
    <div>
      <h1>Seconds: {seconds}</h1>
      <button onClick={()=>setRunning(true)}>Start Seconds</button>
      <button onClick={()=>setRunning(false)}>Stop Seconds</button>
    </div>
  )
}

export default Timer
