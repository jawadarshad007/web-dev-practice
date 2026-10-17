import { useRef, useState } from 'react'



function App() {
  const [time,setTime] = useState(0);
  // const intervalId = null;
  const intervalId = useRef(null) // ya aik object create krta ha jis ma current name ki value hoti ha , jis ko initally hm na 0 sa inilize kia ha
  // ab dobara component render hone pr , intervalId object dobara initialize nai ho ga , ya sirf aik hi bar first time create hota ha 
  // agr hm yahn nomal varible use krte to inko hr render pr dobara value initialize ho jate ha 

  function handleStart(){


    if (intervalId.current != null){ // agr pehle sa koi setInterval chal rha ha, to return a jahe new setInterval create krne ki need zaroorat nai ha
      return;
    }

   intervalId.current = setInterval(()=>{
      console.log("Testing")
      // idr issue ya aa rha tha ka is funciton na time ki value 0 yaad kr li ha (clouser concept applied), wo  br br 0+1 kr rha ha
      // is lia hme screen ma 1  hi show ho raha ha
      // setTime(time+1)

      //SOlution(arrow funciton) is sa ab ya time ki update value ko pick kr rha ha or us sa 1 add kr rha ha
      setTime(time => time+1)
    },1000);
  }

function handleStop(){
  clearInterval(intervalId.current);
  intervalId.current = null;
}

function handleReset(){
   clearInterval(intervalId.current);
   intervalId.current = null;
   setTime(0)
}


  return (
    <>
    <h1>Stopwatch: {time}</h1>
    <div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </>
  );
}

export default App
