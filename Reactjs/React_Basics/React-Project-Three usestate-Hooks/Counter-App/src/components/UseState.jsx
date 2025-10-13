import React, { useState } from 'react'

const UseState = ({data , setData}) => {
  return (
    <div>
      <input type="text" onChange={(event)=> setData(event.target.value) }/>
      <p>You typed: {data}</p>
    </div>
  )
}

export default UseState;
