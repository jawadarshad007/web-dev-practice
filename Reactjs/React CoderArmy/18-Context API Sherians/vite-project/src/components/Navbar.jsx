import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

const Navbar = (props) => {
  console.log(props.children)

  // useContext(userDataContext)	Data access karta hai
  const data= useContext(userDataContext)
  console.log(data)

  return (
    <div>Navbar
      {props.children[0]}
      {props.children[1]}
      <p>this is {data} data provided by UserContext.jsx we consume in Navbar </p>
    </div>
  )
}

export default Navbar