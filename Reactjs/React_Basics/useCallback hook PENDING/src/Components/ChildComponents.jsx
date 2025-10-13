import React from 'react'


// React.memo() tells React:
// “Only re-render this component if its props actually change.”
const ChildComponents =React.memo( (props) => {
    console.log("Child component rendered")
  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  )
})

export default ChildComponents
  