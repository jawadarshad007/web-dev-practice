import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [number,setNumber] = useState(0)

function expensiveTask(num){
  console.log("Inside Expensive Task")
  for (let i = 0; i < 1000000000; i++){}
  return num * 2;
}
// let doubleValue = expensiveTask(number)
  let doubleValue = useMemo(() => expensiveTask(number), [number])
  return (
    <div>
      <h2>Result:{count}</h2>
      <button onClick={() => { setCount(count + 1) }}>Click to increase</button>
      <input type="number" placeholder='Type here for double value' onChange={(e)=>{
         setNumber(e.target.value)
      }} />
      <h2>Double Value:{doubleValue}</h2>
      <input type="text" value="Hello" />
    </div>)
}

export default App
