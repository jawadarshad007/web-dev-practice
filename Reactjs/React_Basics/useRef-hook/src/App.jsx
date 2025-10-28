import { useRef, useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Stopwatch from './Components/Stopwatch'

function App() {
  const [count, setCount] = useState(0)

  // 1. useRef is used to persist values between renders
  let value = useRef(1)
  let btnRef= useRef()
  const handleClick = () => {
    // useref does not cause a re-render when the value changes   
    value.current += 1
    console.log("value: ", value.current); 
    setCount(count + 1)
  }
  useEffect(()=>{
    console.log("I will run on every render");
  })
 function chnageColor(){
    btnRef.current.style.backgroundColor = "red"
 }
  return (
   <div>
    <button ref={btnRef} onClick={handleClick}>Increment</button>
    <br />
    <br />
    <button onClick={chnageColor}>Change color of 1st Button</button>
    <div>
      Count: {count}
    </div>
    <Stopwatch/>
   </div>
  )
}

export default App
