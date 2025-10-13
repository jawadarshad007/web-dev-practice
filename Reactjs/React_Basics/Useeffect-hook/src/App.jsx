
import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Logger from './Components/Logger'
import Timer from './Components/Timer'
import FetchData from './Components/FetchData'
import ResizeWindow from './Components/ResizeWindow'
import MultiUseEffect from './Components/MultiUseEffect'

function App() {
    const [count, setCount] = useState(0)
    const [total , setTotal] = useState(0)
    function handleClick() {
      setCount(count + 1)
    }
    function handleTotal(){
      setTotal(total + 1)
    }

    // fist -> side effect function
    // second -> cleanup function
    // third -> dependency array

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    



    // variation 1 =>runs on each render
    // useEffect(() => {
    //   alert("I will run on each render")
    // })

    // variation 2 => runs only on first render
    // useEffect(()=>{
    //   alert("I will run only on first render")
    // }, [])


    // variation 3 => runs on first render and when dependency updates
    // useEffect(()=>{
    //   alert(`I will run on first render and when count updates ${count}`)
    // }, [count])


    // variation 4(Multiple dependency) => runs on first render and when any dependency updates
    // useEffect(()=>{
    //   alert(`I will run on first render and when count or total updates ${count} ${total}`)
    // }, [count, total])


    // variation 5(cleanup function) => runs on first render and when dependency updates
    // useEffect(()=>{
    //   alert(`I will run on first render and when count updates ${count}`)
      
    //   return ()=>{
    //     alert(`I will run during cleanup when component unmounts or whenever its dependency changes ${count}, React first runs the cleanup function, then runs the effect again.`)
    //   }
    //   },[count])

  return (
    <div>
      <h1 style={{ textAlign: "center" , fontSize: "50px"}}>UseEffect Hook</h1>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Update Count</button>

      <h2>Total: {total}</h2>
      <button onClick={handleTotal}>Update Total</button>
      {/* <Logger/> */}
      {/* <Timer/>   */}
      {/* <FetchData/> */}
      {/* <ResizeWindow/> */}
      {/* <MultiUseEffect/> */}
    </div>
  )
}

export default App
