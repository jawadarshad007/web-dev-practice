import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/about")
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Move to About page</button>
{/* 
      You are passing a new arrow function that returns the function handleClick, but does not call it.
So when the button is clicked, React runs: */}
      {/* <button onClick={()=>handleClick}>Move to About page</button> */}

    </div>
  )
}

export default Home
