import { useState } from 'react'


let intervalId;
function App() {
  const [time,setTime] = useState(0);

  function handleStart(){

   intervalId = setInterval(()=>{
      console.log("Testing")
      // idr issue ya aa rha tha ka is funciton na time ki value 0 yaad kr li ha (clouser concept applied), wo  br br 0+1 kr rha ha
      // setTime(time+1)

      //SOlution(arrow funciton)
      setTime(time => time+1)
    },1000);
  }


  function handleStop(){
    clearInterval(intervalId)
  }

  return (
    <>
    <h1>Stopwatch: {time}</h1>
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button>Reset</button>
    </div>
    </>
  )
}

export default App
