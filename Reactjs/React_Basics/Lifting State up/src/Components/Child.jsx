import React from 'react'

const Child = (props) => {
  return (
    <div>
       
        {props.title}
      <input type="text" onChange={(e)=>props.setName(e.target.value)   } />
      <h1>Value: {props.name}</h1>
    </div>
  )
}

export default Child
