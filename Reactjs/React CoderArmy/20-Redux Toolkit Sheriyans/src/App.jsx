import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'

const App = () => {

    const [number,setNumber] = useState(5)

   // dispatch reducer ka use krte hoe store ma value add krta ha 
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.counter.value)

  return (
    <div>App
      <h1>Counter:{count}</h1>

      <button onClick={()=>{
          dispatch(increment())
      }}>Increment</button>

      <button onClick={()=>{
          dispatch(decrement())
      }} >Decrement</button>

      <input type="number" value={number} placeholder='Enter Number...' onChange={(e)=>setNumber(e.target.value) } />

      <button onClick={()=>{
        dispatch(incrementByAmount(Number(number)))
      }}>Increment by Amount</button>
    </div>
  )
}

export default App