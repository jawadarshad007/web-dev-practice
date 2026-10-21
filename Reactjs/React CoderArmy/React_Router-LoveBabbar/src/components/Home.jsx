import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  // useNavigation hook , is sa hm aik path sa dosare path pr transfer ho skahte hn without re-loading the page 
  const navigate = useNavigate()
  function handleClick(){
    navigate("./about")
  }

  return (
    <div>
    Home Page
    
    <button onClick={handleClick}>
      Move to About Page
    </button>
    </div>
  )
}

export default Home