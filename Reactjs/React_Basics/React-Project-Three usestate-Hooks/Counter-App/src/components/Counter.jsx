import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
    // in that 1st one is variable and 2nd one is method to update variable
  const [count , setCount] = useState(0);
  const decreaseValue =()=>{
    if(count < 1){
      alert("Value cant be negative")
      setCount(0)
    }
    else{
      setCount(count - 1 )

    }
  }
  return (
    <div className='counter-container'>   
      <p id='para'>You clicked {count} times</p>
      
      {/* <button id='btn' onClick={ () =>{
        // We should never directly update state. Ex: count++; is not allowed.
        setCount(count + 1)
      }} >Click Me!</button> */}


      <button id='btn' onClick={ () =>{
        // We should never directly update state. Ex: count++; is not allowed.
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
//         🔹 Problem
// You are expecting count to increase by 3, but React only increases it by 1.
// Why? Because of how React batches (groups) state updates.
              //  Answer
//React doesn’t update the state (count) immediately after every setCount.
// Instead, it waits until the function finishes, then updates the state once.
// So all three lines see the same old value of count

// Here prevalue uses latest updated value
        setCount((preValue)=>  preValue + 1);
        setCount((preValue)=>  preValue + 1);
        setCount((preValue)=>  preValue + 1);
      }} >Click Me!</button>

      <button id="btn" onClick={decreaseValue}>Decrease Value</button>
    </div>
  )
}

export default Counter;
