import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [charAllowed , setcharAllowed] = useState(false)
  const [password , setPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed) str += "0123456789"
      if (charAllowed) str += "~`!@#$%^&*()_-+=[]{}|\:;<>,.?/"



  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>  
     <h1 class="text-4xl font-bold text-center text-white">
    Password Generator
  </h1>
    </>
  )
}

export default App
