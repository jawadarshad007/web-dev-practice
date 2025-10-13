import React from 'react'
import { useState , useEffect} from 'react'

const MultiUseEffect = () => {
    const [count, setCount] = useState(0)
    const [sec , setSec] = useState(0)
    useEffect(() => {
      console.log(`I will run on first render and when count updates ${count}`)
    }, [count])

    useEffect(()=>{
        const intervalId =setInterval(()=>{
            setSec((preValue)=>{ return preValue+1})
        },100) 
        return ()=>{
            console.log("Time to stop")
            clearInterval(intervalId)
        }
    },[])
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Increment Count</button>
      <h1>Seconds {sec}</h1>

    </div>
  )
}

export default MultiUseEffect
