import React, { useEffect } from 'react'

const Logger = () => {
    const [count, setCount] = React.useState(0)
    useEffect(()=>{
        alert("I will run on each render")
    })
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={()=>  setCount(count+1)
      }>Increment</button>
    </div>
  )
}

export default Logger
