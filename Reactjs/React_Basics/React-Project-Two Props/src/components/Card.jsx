import React from 'react'

const Card = (props) => {
  return (
    <div>
      {props.name}
      {props.children}
    </div>
  )
}

export default Card
