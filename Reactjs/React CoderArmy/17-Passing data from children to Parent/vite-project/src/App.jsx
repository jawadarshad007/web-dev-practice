import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'

const App = () => {

  useEffect(()=>{
      const getData =async ()=>{
    const responce = await axios.get('http://localhost:8000/data')
    console.log(responce.data.data[0].userName) 
  }
  getData();
  },[])

  const [theme , setTheme] = useState('light')

  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
  }

  return (
    <>
    <h1>Theme is {theme}</h1>
    <Navbar changeTheme={changeTheme}/>
    </>
  )
}

export default App