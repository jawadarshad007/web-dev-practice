import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    let [sec , setsec] = useState(0)
    let ctrlInternal = useRef();
    // let sec = useRef(0)
    function startTimer(){
         ctrlInternal.current= setInterval(() => {
            setsec((preValue)=> preValue + 1)
            // setsec(sec + 1)
    
        }, 100);
    }
    console.log(ctrlInternal.current) 
    function  stopTimer(){
      clearInterval(ctrlInternal.current)
    }
    function resetbtn(){
        stopTimer()
        setsec(0) 
    }
  return (
    <div>
        <h1></h1>
        <h1>StopWatch: {sec} Seconds </h1>
        <button onClick={startTimer}>Start</button>
        <br />
        <button onClick={stopTimer}>Stop</button>
        <br />
        <button onClick={resetbtn}>Reset</button>
    </div>

  )
}

    export default Stopwatch

